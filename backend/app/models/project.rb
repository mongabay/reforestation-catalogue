class Project < ApplicationRecord
  has_many :project_links
  has_many :project_categories
  has_many :categories, :through => :project_categories

  accepts_nested_attributes_for :project_links

  after_save :set_percentage_for_all_categories

  scope :approved, -> { where(approved: true) }
  scope :highlighted, -> { where(highlighted: true) }

  def get_project_categories_percentage
    project_categories_percentage = {}
    Category.all.each do |category|
      project_categories_percentage[category.slug] = get_percentage_for_category(category)
    end

    return project_categories_percentage
  end  

  def get_percentage_for_category(category)
    fields_with_data = 0
    context_fields = category.filters
    number_of_fields = context_fields.count
    
    return number_of_fields if number_of_fields <= 0

    context_fields.each do |field|
      value = self[field.slug]
      if (field.data_type_string? or field.data_type_number?) and value.present?
        fields_with_data += 1
      end
      if field.data_type_boolean?
        fields_with_data += 1
      end
    end

    return (fields_with_data * 100) / number_of_fields
  end

  def set_percentage_for_all_categories
    self.get_project_categories_percentage.each do |k,v|
      category = Category.where(slug: k).first
      ProjectCategory.create(project: self, category: category, percentage: v)
    end
  end
end
