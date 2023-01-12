class Project < ApplicationRecord
  extend ArrayEnum

  has_many :project_contacts, dependent: :destroy
  has_many :project_links, dependent: :destroy
  has_many :project_categories, dependent: :destroy
  has_many :categories, :through => :project_categories
  belongs_to :previous_version, optional: true, class_name: 'Project'

  accepts_nested_attributes_for :project_contacts
  accepts_nested_attributes_for :project_links

  after_save :update_percentage_for_all_categories
  after_update :delete_previous_version_if_approved

  scope :approved, -> { where(approved: true) }
  scope :highlighted, -> { where(highlighted: true) }

  enum organization_type: {
    'Nongovernmental organization (NGO)' => 20,
    'Community-based organization (CBO)' => 21,
    'Private Sector' => 22,
    'Intergovernmental organization (IGO)' => 23,
    'Government' => 6,
    'University / Academic institution' => 18
  }

  array_enum who_is_involved: {
    'academia' => 0,
    'community-based organization' => 1,
    'company' => 2,
    'farmers' => 3,
    'government' => 4,
    'indigenous community' => 5,
    'international organization' => 6,
    'local community'=> 7,
    'NGO' => 8,
    'school' => 9,
    'volunteers' => 10,
    'Private sector' => 11,
    'intergovernmental organization' => 12,
    'local government' => 13,
    'children' => 14,
    'socially beneficial business' => 15,
    'international organizations' => 16,
    'academic institution' => 17
  }

  array_enum forest_type: {
    'Boreal mountain system' => 0,
    'Subtropical dry forest' => 1,
    'Subtropical humid forest' => 2,
    'Subtropical mountain system' => 3,
    'Subtropical steppe' => 4,
    'Temperate continental forest' => 5,
    'Temperate desert' => 6,
    'Temperate mountain system' => 7,
    'Temperate oceanic forest' => 8,
    'Temperate steppe' => 9,
    'Tropical desert' => 10,
    'Tropical dry forest' => 11,
    'Tropical moist deciduous forest' => 12,
    'Tropical moist forest' => 13,
    'Tropical mountain system' => 14,
    'Tropical rainforest' => 15,
    'Tropical shrubland' => 16,
    'Boreal coniferous forest' => 17

  }

  array_enum primary_objective_purpose: {
    'Biodiversity conservation' => 0,
    'Restore degraded forests' => 59,
    'Afforestation' => 58,
    'Develop forest products' => 92,
    'Enable payment for ecosystem services' => 93,
    'Livelihood development' => 9,
    'Sustainable forestry management' => 75,
    'Restore mangroves' => 94,
    'Carbon sequestration' => 95,
    'Research' => 22,
    'Soil conservation' => 25,
    'Restore watersheds' => 96,
    'Support law enforcement' => 31,
    'Provision of ecosystem services' => 18,
    'Improve governance' => 97
  }

  array_enum approach: {
    'agroforestry' => 0,
    'assisted-natural regeneration' => 1,
    'seeding' => 2,
    'seedling planting' => 3,
    'passive restoration' => 4
  }

  array_enum financial_model: {
    'Private sector financing' => 16,
    'Different sources' => 3,
    'Individual donations' => 17,
    'Foundation funding' => 18,
    'Government funding' => 19,
    'Self-funded' => 10,
    'Volunteer' => 11
  }

  array_enum type_of_follow_up: {
    'Camera traps' => 0,
    'On-going maintainance' => 12,
    'On-going monitoring' => 13,
    'Replanting' => 14,
    'Measuring survival rate' => 15,
    'Training' => 6,
    'Monitoring up to three years' => 7,
    'Monitoring after six month' => 16,
    'Monitoring up to five years' => 17,
    'Management from three to five years' => 18
  }

  PROJECT_ENUMS = [
    'organization_type',
    'who_is_involved',
    'forest_type',
    'primary_objective_purpose',
    'approach',
    'financial_model',
    'type_of_follow_up'
  ].freeze

  END_YEAR_SPECIAL_VALUES = {
    'ongoing' => 0
  }

  COUNTRIES_SPECIAL_VALUES = {
    'all' => 'All'
  }
  # Returns a hash with a percentage for each category 
  def get_project_categories_percentage
    project_categories_percentage = {}
    Category.all.each do |category|
      project_categories_percentage[category.slug] = get_percentage_for_category(category)
    end

    return project_categories_percentage
  end

  # Returns a percentage for a given Category object
  # based on the project attributes and the category filters
  def get_percentage_for_category(category)
    fields_with_data = 0
    category_filters = category.filters
    number_of_filters = category_filters.count
    
    return number_of_filters if number_of_filters <= 0

    category_filters.each do |filter|
      value = self[filter.slug]
      if filter.data_type_year? and value.present?
        fields_with_data += 1 if  filter.slug == 'start_year' and value > 0
        fields_with_data += 1 if  filter.slug == 'end_year' and value >= 0
      end
      if filter.data_type_string?
        fields_with_data += 1  if value.present? and value.length > 0
      end
      if filter.data_type_number?
        fields_with_data += 1 if value.present? and value != 0
      end
      if filter.data_type_not_empty?
        if value.present? and value.length > 0
          fields_with_data += 1
        else
          # partner_name is evaluated based on has_project_partners
          # even if value is empty
          if filter.slug == 'partner_name' and self['has_project_partners'] == false
            fields_with_data += 1
          end
        end
      end
      if filter.data_type_boolean?
        fields_with_data += 1 unless value.nil?
      end
    end

    return (fields_with_data * 100) / number_of_filters
  end

  # Deletes previous project's ProjectCategories
  # Creates new project's ProjectCategories with updated percentages
  # for each category
  def update_percentage_for_all_categories
    self.get_project_categories_percentage.each do |k,v|
      category = Category.where(slug: k).first
      ProjectCategory.where(project: self, category: category).delete_all
      ProjectCategory.create(project: self, category: category, percentage: v)
    end
  end

  def delete_previous_version_if_approved
    return unless self.approved?

    previous_version = self.previous_version
    return if previous_version == nil

    # updating previous version id without triggering callbacks
    # cause we do not want to fall in an eternal loop, right?
    self.update_columns(previous_version_id: nil)
    # now I need to update all the projects that were linked to the one
    # that is going to be destroyed
    # and link them to the one that now is approved
    # looks like the perfect recipe for a huge mess
    Project.where(previous_version_id: previous_version.id).update_all(previous_version_id: self.id)
    # and now we are going to reassing all links and contacts to the current project
    previous_version.project_links.update_all(project_id: self.id)
    previous_version.project_contacts.update_all(project_id: self.id)

    # and now we destroy de previous_version
    # because the changes are approved
    previous_version.destroy
  end

  def updated_from_previous_version?
    previous_version.present?
  end
end
