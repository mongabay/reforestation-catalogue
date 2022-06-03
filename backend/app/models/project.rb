class Project < ApplicationRecord
  extend ArrayEnum

  has_many :project_contacts
  has_many :project_links
  has_many :project_categories
  has_many :categories, :through => :project_categories

  accepts_nested_attributes_for :project_contacts
  accepts_nested_attributes_for :project_links

  after_save :set_percentage_for_all_categories

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
    'Intiative and Foundation' => 19,
    'Government' => 20
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
    'plant a tree per recycled smartphone to compensate humanity’s carbon footprint' => 57,
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
    'ongoing' => nil
  }

  COUNTRIES_SPECIAL_VALUES = {
    'all' => 'All'
  }
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
