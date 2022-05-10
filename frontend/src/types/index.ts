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

export enum END_YEAR_SPECIAL_VALUES {
  ONGOING = 'ongoing',
}

export enum COUNTRIES_SPECIAL_VALUES {
  ALL = 'All',
}

export interface Project {
  id: number;
  projectName: string;
  leadOrganization: string;
  organizationType: string;
  whoIsInvolved: string;
  projectOrgUrl: string;
  hasProjectPartners: string;
  partnerName: string;
  startYear: number;
  endYear: number | END_YEAR_SPECIAL_VALUES;
  country: string;
  countryCode: string;
  sizeOfProjectHa: number;
  treesPlantedNumber: number;
  hasExplicitLocation: boolean;
  forestType: string;
  primaryObjectivePurpose: string;
  approach: string;
  identifyDeforestationDriver: boolean;
  firePrevention: boolean;
  hasJustificationForApproach: boolean;
  addressesKnownThreats: boolean;
  disclosesSpeciesUsed: boolean;
  useNativeSpecies: boolean;
  useExoticSpecies: boolean;
  localSeedlingNurseries: boolean;
  financialModel: string;
  nameOrgDonor: string;
  hasPublicReports: boolean;
  followUpDisclosed: boolean;
  typeOfFollowUp: string;
  hasCommunityInvolvement: boolean;
  hasGenderComponent: boolean;
  scientificResearchAssociatedWithProject: boolean;
  newsArticlesAssociatedWithProject: boolean;
  comment: string;
}

export enum Categories {
  Context = 'Context',
  Ecological = 'Ecological',
  Economic = 'Economic',
  Social = 'Social',
  Institutional = 'Institutional',
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
  id: string;
  type: FilterTypes;
  mode: FilterModes;
  options?: { label: string; value: string }[];
  commaSeparated?: boolean;
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
