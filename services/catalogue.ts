import axios from 'axios';

import { Project } from 'types';

export const getCatalogueData = () => axios.get('/data/mongabay-data.json').then(resp => resp);

export const CONTEXT_CATEGORY = 'Context';
export const ECOLOGICAL_CATEGORY = 'Ecological';
export const ECONOMIC_CATEGORY = 'Economic';
export const SOCIAL_CATEGORY = 'Social';
export const INSTITUTIONAL_CATEGORY = 'Institutional';
export const CATEGORIES = [
  {
    id: CONTEXT_CATEGORY,
    fields: [
      {
        id: 'startYear',
        type: 'string',
      },
      {
        id: 'endYear',
        type: 'string',
      },
      {
        id: 'hasExplicitLocation',
        type: 'boolean',
      },
      {
        id: 'country',
        type: 'string',
      },
      {
        id: 'sizeOfProjectHa',
        type: 'number',
      },
    ],
  },
  {
    id: ECOLOGICAL_CATEGORY,
    fields: [
      {
        id: 'forestType',
        type: 'string',
      },
      {
        id: 'firePrevention',
        type: 'boolean',
      },
      {
        id: 'addressesKnownThreats',
        type: 'boolean',
      },
      {
        id: 'disclosesSpeciesUsed',
        type: 'boolean',
      },
    ],
  },
  {
    id: ECONOMIC_CATEGORY,
    fields: [
      {
        id: 'identifyDeforestationDriver',
        type: 'boolean',
      },
      {
        id: 'localSeedlingNurseries',
        type: 'boolean',
      },
      {
        id: 'financialModel',
        type: 'string',
      },
      {
        id: 'followUpDisclosed',
        type: 'boolean',
      },
    ],
  },
  {
    id: SOCIAL_CATEGORY,
    fields: [
      {
        id: 'hasCommunityInvolvement',
        type: 'boolean',
      },
      {
        id: 'hasGenderComponent',
        type: 'boolean',
      },
    ],
  },
  {
    id: INSTITUTIONAL_CATEGORY,
    fields: [
      {
        id: 'organizationType',
        type: 'string',
      },
      {
        id: 'partnerName',
        type: 'not-empty',
      },
      {
        id: 'scientificResearchAssociatedWithProject',
        type: 'boolean',
      },
    ],
  },
];

export const getCategoryByID = id => CATEGORIES.find(c => c.id === id);

const filterByField = (data, fieldName, value, commaSeparated = false) =>
  data.filter(e => (commaSeparated ? e[fieldName].includes(value) : e[fieldName] === value));
