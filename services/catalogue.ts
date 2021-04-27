import axios from 'axios';
import { FilterModes } from 'types';

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
        type: 'string',
        hidden: false,
      },
      {
        id: 'endYear',
        label: 'End year',
        type: 'string',
        hidden: false,
      },
      {
        id: 'hasExplicitLocation',
        label: 'Has a explicit location',
        type: 'boolean',
        hidden: false,
      },
      {
        id: 'country',
        label: 'Country',
        type: 'string',
        hidden: true,
      },
      {
        id: 'sizeOfProjectHa',
        label: 'Size of project in ha',
        type: 'number',
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
        type: 'string',
        commaSeparated: true,
        hidden: false,
      },
      {
        id: 'firePrevention',
        label: 'Fire prevention',
        type: 'boolean',
        hidden: false,
      },
      {
        id: 'addressesKnownThreats',
        label: 'Adresses known threats',
        type: 'boolean',
        hidden: false,
      },
      {
        id: 'disclosesSpeciesUsed',
        label: 'Discloses species used',
        type: 'boolean',
        hidden: false,
      },
    ],
  },
  {
    id: ECONOMIC_CATEGORY,
    label: 'Economic',
    fields: [
      {
        id: 'identifyDeforestationDriver',
        label: 'Identifies deforestation driver',
        type: 'boolean',
        hidden: false,
      },
      {
        id: 'localSeedlingNurseries',
        label: 'Local seedling nurseries',
        type: 'boolean',
        hidden: false,
      },
      {
        id: 'financialModel',
        label: 'Financial model',
        type: 'string',
        commaSeparated: true,
        hidden: false,
      },
      {
        id: 'followUpDisclosed',
        label: 'Follow up disclosed',
        type: 'boolean',
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
        type: 'boolean',
        hidden: false,
      },
      {
        id: 'hasGenderComponent',
        label: 'Has gender component',
        type: 'boolean',
        hidden: false,
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
        type: 'string',
        commaSeparated: true,
        mode: FilterModes.Includes,
        hidden: false,
      },
      {
        id: 'partnerName',
        label: 'Partner name',
        type: 'not-empty',
        hidden: false,
      },
      {
        id: 'scientificResearchAssociatedWithProject',
        label: 'Scientific research associated with project',
        type: 'boolean',
        hidden: false,
      },
    ],
  },
];

export const getCategoryByID = id => CATEGORIES.find(c => c.id === id);

const filterByField = (data, fieldName, value, commaSeparated = false) =>
  data.filter(e => (commaSeparated ? e[fieldName].includes(value) : e[fieldName] === value));
