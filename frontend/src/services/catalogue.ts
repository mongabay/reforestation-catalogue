import axios from 'axios';

import { Category, FilterModes, FilterTypes } from 'types';

export const getCatalogueData = () => axios.get('/data/mongabay-data.json').then((resp) => resp);
export const CONTEXT_CATEGORY = 'Context';
export const ECOLOGICAL_CATEGORY = 'Ecological';
export const ECONOMIC_CATEGORY = 'Economic';
export const SOCIAL_CATEGORY = 'Social';
export const INSTITUTIONAL_CATEGORY = 'Institutional';
export const CATEGORIES: Category[] = [
  {
    id: CONTEXT_CATEGORY,
    label: 'Context',
    description:
      'Does the project disclose basic information about its size, location, and duration?',
    fields: [
      {
        id: 'startYear',
        label: 'Start year',
        type: FilterTypes.Year,
        mode: FilterModes.GreaterOrEqualThan,
        hidden: false,
      },
      {
        id: 'endYear',
        label: 'End year',
        type: FilterTypes.Year,
        mode: FilterModes.LessOrEqualThan,
        hidden: false,
      },
      {
        id: 'hasExplicitLocation',
        label: 'Has a explicit location',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'hasPublicReports',
        label: 'Has public reports',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: true,
      },
      {
        id: 'hasJustificationForApproach',
        label: 'Has justification for approach',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: true,
      },
      {
        id: 'country',
        label: 'Country',
        type: FilterTypes.String,
        options: [],
        mode: FilterModes.Exact,
        hidden: true,
      },
      {
        id: 'sizeOfProjectHa',
        label: 'Size of project in ha',
        type: FilterTypes.Number,
        mode: FilterModes.GreaterOrEqualThan,
        hidden: false,
      },
    ],
  },
  {
    id: ECOLOGICAL_CATEGORY,
    label: 'Ecological',
    description:
      'Does the project disclose what kinds of trees it will plant and address threats to a specified ecosystem?',
    fields: [
      {
        id: 'forestType',
        label: 'Forest type',
        type: FilterTypes.String,
        options: [],
        commaSeparated: true,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'firePrevention',
        label: 'Fire prevention',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'addressesKnownThreats',
        label: 'Addresses known threats',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'disclosesSpeciesUsed',
        label: 'Discloses species used',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
    ],
  },
  {
    id: ECONOMIC_CATEGORY,
    label: 'Economic',
    description: 'How is the project funded and how does it support local communities?',
    fields: [
      {
        id: 'nameOrgDonor',
        label: 'Name Org/Donor',
        type: FilterTypes.String,
        options: [],
        mode: FilterModes.Exact,
        hidden: true,
      },
      {
        id: 'identifyDeforestationDriver',
        label: 'Identifies deforestation driver',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'localSeedlingNurseries',
        label: 'Local seedling nurseries',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'financialModel',
        label: 'Financial model',
        type: FilterTypes.String,
        options: [],
        commaSeparated: true,
        mode: FilterModes.Includes,
        hidden: false,
      },
      {
        id: 'followUpDisclosed',
        label: 'Follow up disclosed',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
    ],
  },
  {
    id: INSTITUTIONAL_CATEGORY,
    label: 'Institutional',
    description:
      'What kind of organization is managing the project? Is there a research component?',
    fields: [
      {
        id: 'organizationType',
        label: 'Organization type',
        type: FilterTypes.String,
        options: [],
        commaSeparated: true,
        mode: FilterModes.Includes,
        hidden: false,
      },
      {
        id: 'scientificResearchAssociatedWithProject',
        label: 'Scientific research associated with project',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'hasProjectPartners',
        label: 'Has project partners',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: true,
      },
    ],
  },
  {
    id: SOCIAL_CATEGORY,
    label: 'Social',
    description: 'Who is participating and who is benefitting?',
    fields: [
      {
        id: 'hasCommunityInvolvement',
        label: 'Has community involvement',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'hasGenderComponent',
        label: 'Has gender component',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'newsArticlesAssociatedWithProject',
        label: 'Has news articles associated with project',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: true,
      },
    ],
  },
];

export const SORT_OPTIONS = CATEGORIES.map((c) => ({ label: c.label, value: c.id }));

export const getCategoryByID = (id) => CATEGORIES.find((c) => c.id === id);
export const getFieldByID = (id) => {
  for (let i = 0; i < CATEGORIES.length; i++) {
    const found = CATEGORIES[i].fields.find((f) => f.id === id);
    if (found) {
      return found;
    }
  }
  return null;
};
