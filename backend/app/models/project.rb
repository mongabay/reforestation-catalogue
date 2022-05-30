class Project < ApplicationRecord
  # serialize :who_is_involved
  # serialize :primary_objective_purpose
  # serialize :approach

  has_many :project_categories
  has_many :categories, :through => :project_categories

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
end
