class Project < ApplicationRecord
  extend ArrayEnum

  has_many :project_contacts
  has_many :project_links
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
    'Charitable organization' => 0,
    'Community-based organization / Association / Cooperative' => 1,
    'Company' => 2,
    'Environmental Conservation Organization' => 3,
    'Foundation' => 4,
    'Global Environmental Authority' => 5,
    'Government' => 6,
    'Initiative and Foundation' => 7,
    'Initiative / Foundation' => 8,
    'International organization' => 9,
    'International youth movement' => 10,
    'Nature Conservation Company' => 11,
    'NGO / Nonprofit Organization' => 12,
    'Private nature reserve' => 13,
    'Private Property/Landowner' => 14,
    'Public and Private sector partnership' => 15,
    'Social Enterprise' => 16,
    'Socially beneficial business' => 17,
    'University / Academic institution' => 18,
    'Intiative and Foundation' => 19
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
    'biodiversity conservation' => 0,
    'combat deforestation' => 1,
    'combat desertification' => 2,
    'commercial tree plantation' => 3,
    'conversion of pasture to agroforestry' => 4,
    'develop financial mechanism through carbon market' => 5,
    'improve air quality' => 6,
    'increase tree species composition and diversity' => 7,
    'forest management plantation' => 8,
    'livelihood development' => 9,
    'mangrove restoration' => 10,
    'mitigate the effects of conventional farming practices' => 11,
    'promote carbon credits sale' => 12,
    'promote ecotourism' => 13,
    'promote resilient ecosystems' => 14,
    'promote sustainable agriculture' => 15,
    'protect forests' => 16,
    'protect orangutans' => 17,
    'provision of ecosystem services' => 18,
    'quantify and maximize carbon sequestration' => 19,
    'reforest and revive natural habitat' => 20,
    'reforest savanna-like vegetation' => 21,
    'research' => 22,
    'restoration of endemic forest' => 23,
    'restore degraded and deforested areas' => 24,
    'soil conservation' => 25,
    'water quality improvement' => 26,
    'youth capacity building' => 27,
    'improve land forest management' => 28,
    'prevent encroachment' => 29,
    'ravine conservation' => 30,
    'support law enforcement' => 31,
    'payment for ecosystem services' => 32,
    'sustainable timber supply' => 33,
    'restore the Atlantic Forest' => 34,
    'reduce deforestation' => 35,
    'forest management' => 36,
    'restore degraded peatlands' => 37,
    'sustainable production and use of wood energy' => 38,
    'protect primary forest' => 39,
    'sustainable management of natural resources' => 40,
    'restore native forests and ecosystems' => 41,
    'recover degraded plots and plant timber and fruit trees' => 42,
    'restore native Miombo woodlots on smallhold farms' => 43,
    'restore longleaf pine to the southeast' => 44,
    'improving knowledge about native species' => 45,
    'sustainable fishing' => 46,
    'test payment for ecosystem service (PES) as a tool for forest landscape restoration (FLR)' => 47,
    'restore ravine' => 48,
    'restore abandoned and unproductive land' => 49,
    'provision ecosystem services' => 50,
    'development of policy for enabling the promotion of forest landscape restoration (FLR)' => 51,
    'restoration of abandoned rice fields' => 52,
    'restore chilgoza forest' => 53,
    'develop a clearer understanding of land rights' => 54,
    'improve good forest governance' => 55,
    'restore degraded and deforested areas in natural reserves parks for conservation purposes' => 56,
    'plant a tree per recycled smartphone to compensate humanity???s carbon footprint' => 57,
    'afforestation' => 58,
    'restore degraded forests' => 59,
    'increase forest cover' => 60,
    'increase forest cover in urban and rural areas' => 61,
    'create a model that can be shared with the AFR100' => 62,
    'increase cacao production' => 63,
    'protection of dry forest' => 64,
    'sustainable farming' => 65,
    'promote sustainable agriculture and forestry' => 66,
    'processing wood and bamboo products' => 67,
    'integrate government policies' => 68,
    'biodiveristy conservation' => 69,
    'cocoa production' => 70,
    'sale of certified tropical timber' => 71,
    'reforestation for timber production' => 72,
    'reintroduce captive Asian elephants' => 73,
    'increase forest cover in urban areas' => 74,
    'sustainable forestry management' => 75,
    'mangrove protection' => 76,
    'investment reforestation projects' => 77,
    'sustainable forest mangement' => 78,
    'bird protection' => 79,
    'production and harvesting and processing of durable wood and bamboo products' => 80,
    'reverse deforestation in the highlands' => 81,
    'restoration and recovery of degraded wildlife reserve' => 82,
    'restore natural hydrologic conditions' => 83,
    'protection of critical habitats for migratory birds' => 84,
    'plant trees in national forests' => 85,
    'coastal protection against tsunami events' => 86,
    'mangrove and coral reef ecosystems restoration' => 87,
    'conserve tropical rainforest' => 88,
    'turn land into a Private Natural Heritage Reserve (private domain conservation unit)' => 89,
    'urban afforestation' => 90,
    'rehabilitate and restore three vegetation types' => 91
  }

  array_enum approach: {
    'agroforestry' => 0,
    'assisted-natural regeneration' => 1,
    'seeding' => 2,
    'seedling planting' => 3,
    'passive restoration' => 4
  }

  array_enum financial_model: {
    'Business partners' => 0,
    'Charity organization' => 1,
    'Company funds' => 2,
    'Different sources' => 3,
    'Donation' => 4,
    'Foundation' => 5,
    'Government budget' => 6,
    'Industry sponsorship' => 7,
    'Intergovernmental organization fund' => 8,
    'Overseas development assistance' => 9,
    'Self-funded' => 10,
    'Volunteer' => 11,
    'Overseas government' => 12,
    'Private sector' => 13,
    'philanthropic donations' => 14,
    'private/corporate' => 15

  }

  array_enum type_of_follow_up: {
    'camera traps' => 0,
    'maintenance' => 1,
    'monitoring' => 2,
    'replating' => 3,
    'scale up' => 4,
    'survival rate' => 5,
    'training' => 6,
    'monitoring up to three years' => 7,
    'monitoring after 6 months of plantation' => 8,
    'monitoring up to 5 years' => 9,
    'management from 3-5 years' => 10,
    'health' => 11
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
end
