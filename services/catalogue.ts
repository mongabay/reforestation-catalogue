import axios from 'axios';
import { FilterModes, FilterTypes } from 'types';

export const getCatalogueData = () => axios.get('/data/mongabay-data.json').then(resp => resp);

export const CONTEXT_CATEGORY = 'Context';
export const ECOLOGICAL_CATEGORY = 'Ecological';
export const ECONOMIC_CATEGORY = 'Economic';
export const SOCIAL_CATEGORY = 'Social';
export const INSTITUTIONAL_CATEGORY = 'Institutional';
export const CATEGORIES = [
  {
    id: CONTEXT_CATEGORY,
    label: 'Context',
    fields: [
      {
        id: 'startYear',
        label: 'Start year',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: false,
      },
      {
        id: 'endYear',
        label: 'End year',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
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
        mode: FilterModes.Exact,
        hidden: true,
      },
      {
        id: 'sizeOfProjectHa',
        label: 'Size of project in ha',
        type: FilterTypes.Number,
        mode: FilterModes.Exact,
        hidden: false,
      },
    ],
  },
  {
    id: ECOLOGICAL_CATEGORY,
    label: 'Ecological',
    fields: [
      {
        id: 'forestType',
        label: 'Forest type',
        type: FilterTypes.String,
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
        label: 'Adresses known threats',
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
    fields: [
      {
        id: 'nameOrgDonor',
        label: 'Name Org/Donor',
        type: FilterTypes.String,
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
    id: SOCIAL_CATEGORY,
    label: 'Social',
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
  {
    id: INSTITUTIONAL_CATEGORY,
    label: 'Institutional',
    fields: [
      {
        id: 'organizationType',
        label: 'Organization type',
        type: FilterTypes.String,
        commaSeparated: true,
        mode: FilterModes.Includes,
        hidden: false,
      },
      {
        id: 'partnerName',
        label: 'Partner name',
        type: FilterTypes.NotEmpty,
        mode: FilterModes.Exact,
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
];

export const getCategoryByID = id => CATEGORIES.find(c => c.id === id);

const filterByField = (data, fieldName, value, commaSeparated = false) =>
  data.filter(e => (commaSeparated ? e[fieldName].includes(value) : e[fieldName] === value));
