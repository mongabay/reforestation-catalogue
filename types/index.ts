export interface Project {
  projectNumber: number;
  projectName: string;
  leadOrganization: string;
  organizationType: string;
  whoIsInvolved: string;
  projectOrgUrl: string;
  hasProjectPartners: string;
  partnerName: string;
  startYear: number;
  endYear: number;
  country: string;
  countryCode: string;
  sizeOfProjectHa: number;
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

export enum Category {
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
}

export enum FilterTypes {
  Number = 'number',
  String = 'string',
  Boolean = 'boolean',
}

export interface Filter {
  type: FilterTypes;
  value: number | string | boolean;
  propertyName: string;
  mode: FilterModes;
}
