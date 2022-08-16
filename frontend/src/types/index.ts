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

type EnumValue = number;

export interface Project {
  id: string;
  project_name: string;
  lead_organization?: string;
  organization_type?: EnumValue;
  who_is_involved?: EnumValue[];
  project_org_url: string;
  project_links_attributes: {
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
  Institutional = 'institutional',
  Social = 'social',
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
  impactScore: boolean;
  enum?: boolean;
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
