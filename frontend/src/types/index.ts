export interface LayoutStaticProp<PageProps = {}, Props = {}> {
  Component?: React.FC<Props>;
  props?: Props | ((props: PageProps) => Props);
}

/**
 * Type of the Page components
 */
export type PageComponent<PageProps = {}, LayoutProps = {}> = React.FC<PageProps> & {
  layout?: LayoutStaticProp<PageProps, LayoutProps>;
};

export enum COUNTRIES_SPECIAL_VALUES {
  ALL = 'All',
}

export enum InvolvedOrgType {
  Academia = 'academia',
  CommunityBasedOrganization = 'community-based organization',
  Company = 'company / private sector',
  Farmers = 'farmers',
  Government = 'government',
  IndigenousCommunity = 'indigenous community',
  InternationalOrganization = 'international organization',
  LocalCommunity = 'local community',
  NGO = 'NGO',
  School = 'school',
  Volunteers = 'volunteers',
}

export enum PrimaryObjectivePurposeType {
  BiodiversityConservation = 'biodiversity conservation',
  CombatDeforestation = 'combat deforestation',
  CombatDesertification = 'combat desertification',
  CommercialTreePlantation = 'commercial tree plantation',
  ConversionPasture = 'conversion of pasture to agroforestry',
  DevelopFinancialMechanism = 'develop financial mechanism through carbon market',
  ImproveAirQuality = 'improve air quality',
  IncreaseTreeSpecies = 'increase tree species composition and diversity',
  ForestManagementPlantation = 'forest management plantation',
  LivelihoodDevelopment = 'livelihood development',
  MangroveRestoration = 'mangrove restoration',
  MitigateConventionalFarming = 'mitigate the effects of conventional farming practices',
  PromoteCarbonCredits = 'promote carbon credits sale',
  PromoteEcotourism = 'promote ecotourism',
  PromoteResilientEcosystems = 'promote resilient ecosystems',
  PromoteSustainableAgriculture = 'promote sustainable agriculture',
  ProtectForests = 'protect forests',
  ProtectOrangutans = 'protect orangutans',
  ProvisionEcosystemServices = 'provision of ecosystem services',
  QuantifyCarbonSequestration = 'quantify and maximize carbon sequestration',
  ReforestNaturalHabitat = 'reforest and revive natural habitat',
  ReforestSavanna = 'reforest savanna-like vegetation',
  Research = 'research',
  RestorationEndemicForest = 'restoration of endemic forest',
  RestoreAreas = 'restore degraded and deforested areas',
  SoilConservation = 'soil conservation',
  WaterQuality = 'water quality improvement',
  YouthCapacityBuilding = 'youth capacity building',
}

export enum ApproachType {
  Agroforestry = 'agroforestry',
  NaturalRegeneration = 'assisted-natural regeneration',
  PassiveRestoration = 'passive restoration',
  Seeding = 'seeding',
  SeedlingPlanting = 'seedling planting',
}

export enum FollowUpType {
  CameraTraps = 'camera traps',
  Maintenance = 'maintenance',
  Monitoring = 'monitoring',
  Replating = 'replating',
  ScaleUp = 'scale up',
  SurvivalRate = 'survival rate',
  Training = 'training',
}

export enum ForestType {
  BorealMountainSystem = 'Boreal mountain system',
  SubtropicalDryForest = 'Subtropical dry forest',
  SubtropicalHumidForest = 'Subtropical humid forest',
  SubtropicalMountainSystem = 'Subtropical mountain system',
  SubtropicalSteppe = 'Subtropical steppe',
  TemperateContinentalForest = 'Temperate continental forest',
  TemperateDesert = 'Temperate desert',
  TemperateMountainSystem = 'Temperate mountain system',
  TemperateOceanicForest = 'Temperate oceanic forest',
  TemperateSteppe = 'Temperate steppe',
  TropicalDesert = 'Tropical desert',
  TropicalDryForest = 'Tropical dry forest',
  TropicalMoistDeciduousForest = 'Tropical moist deciduous forest',
  TropicalMoistForest = 'Tropical moist forest',
  TropicalMountainSystem = 'Tropical mountain system',
  TropicalRainforest = 'Tropical rainforest',
  TropicalShrubland = 'Tropical shrubland',
}

export enum OrganizationType {
  CharitableOrganization = 'Charitable organization',
  Association = 'Community-based organization / Association / Cooperative',
  Company = 'Company',
  EnvironmentalConservationOrganization = 'Environmental Conservation Organization',
  Foundation = 'Foundation',
  GlobalEnvironmentalAuthority = 'Global Environmental Authority',
  Government = 'Government',
  InitiativeFoundation = 'Initiative and Foundation',
  Initiative = 'Initiative / Foundation',
  InternationalOrganization = 'International organization',
  InternationalYouthMovement = 'International youth movement',
  NatureConservationCompany = 'Nature Conservation Company',
  NGO = 'NGO / Nonprofit Organization',
  PrivateNatureReserve = 'Private nature reserve',
  PrivateProperty = 'Private Property/Landowner',
  PublicPrivatePartnership = 'Public and Private sector partnership',
  SocialEnterprise = 'Social Enterprise',
  SociallyBeneficialBusiness = 'Socially beneficial business',
  University = 'University / Academic institution',
}

export enum FinancialModelType {
  BusinessPartners = 'Business partners',
  CharityOrganization = 'Charity organization',
  CompanyFunds = 'Company funds',
  DifferentSources = 'Different sources',
  Donation = 'Donation',
  Foundation = 'Foundation',
  GovernmentBudget = 'Government budget',
  IndustrySponsorship = 'Industry sponsorship',
  IntergovernmentalOrganizationFunding = 'Intergovernmental organization funding',
  OverseasDevelopmentAssistance = 'Overseas development assistance',
  SelfFunded = 'Self-funded',
  Volunteer = 'Volunteer',
}

type EnumValue = number;

export interface Project {
  id: string;
  project_name: string;
  lead_organization?: string;
  organization_type?: EnumValue;
  who_is_involved?: EnumValue[];
  project_org_url: string;
  project_links: {
    title?: string;
    description?: string;
    url: string;
  }[];
  has_project_partners: boolean;
  partner_name?: string;
  start_year?: number;
  end_year?: number;
  country?: string;
  country_code?: string;
  size_of_project_ha?: number;
  trees_planted_number?: number;
  has_explicit_location: boolean;
  forest_type: EnumValue[];
  primary_objective_purpose?: EnumValue[];
  approach?: EnumValue[];
  identify_deforestation_driver: boolean;
  fire_prevention: boolean;
  has_justification_for_approach: boolean;
  addresses_known_threats: boolean;
  discloses_species_used: boolean;
  use_native_species: boolean;
  use_exotic_species: boolean;
  local_seedling_nurseries: boolean;
  financial_model?: EnumValue[];
  name_org_donor?: string;
  has_public_reports?: boolean;
  follow_up_disclosed: boolean;
  type_of_follow_up?: EnumValue[];
  has_community_involvement: boolean;
  has_gender_component: boolean;
  scientific_research_associated_with_project: boolean;
  news_articles_associated_with_project: boolean;
  comment?: string;
  approved: boolean;
  highlighted: boolean;
  percentages: {
    context: number;
    ecological: number;
    economic: number;
    institutional: number;
    social: number;
  };
}

export type ProjectFormData = Omit<
  Project,
  'id' | 'countryCode' | 'comment' | 'approved' | 'highlighted' | 'percentages'
> & {
  id?: Project['id'];
} & {
  project_contacts_attributes: {
    name: string;
    email?: string;
    company?: string;
  }[];
};

export enum Categories {
  Context = 'context',
  Ecological = 'ecological',
  Economic = 'economic',
  Social = 'social',
  Institutional = 'institutional',
}

export enum FilterModes {
  Exact = 'exact',
  Includes = 'includes',
  GreaterOrEqualThan = 'greater-or-equal-than',
  LessOrEqualThan = 'less-or-equal-than',
  Range = 'range',
}

export enum FilterTypes {
  Year = 'year',
  Number = 'number',
  String = 'string',
  Boolean = 'boolean',
}

export interface Field {
  id: keyof Project;
  type: FilterTypes;
  mode: FilterModes;
  label: string;
  hidden: boolean;
}

export interface Category {
  id: string;
  label: string;
  description: string;
  fields: Field[];
}

export interface Filter {
  field: Field['id'];
  value: number | string | boolean;
}

export interface MetaInfo {
  title: string;
  description: string;
  thumbnailURL: string;
}

export enum EmbedTypes {
  Filters = 'filters',
  ProjectList = 'project-list',
  ProjectCard = 'project-card',
}

export interface CMSStaticPage {
  id: string;
  slug: string;
  type: 'static_page';
  title: string;
  body: string;
}

export interface APIProjectMeta {
  current_page: number;
  from: number;
  pages: number;
  projects_matching_query: number;
  projects_total: number;
  to: number;
}

export interface Enum {
  type: 'enum';
  name: Field['id'];
  data: Record<string, number>;
}
