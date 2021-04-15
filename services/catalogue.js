import { CATALOGUE_DATA } from 'utils/catalogue-data';

export const CATEGORIES = [
  {
    id: 'Context',
    fields: [
      {
        id: 'Start Year',
        type: 'string',
      },
      {
        id: 'End Year',
        type: 'string',
      },
      {
        id: 'Has explicit location',
        type: 'boolean',
      },
      {
        id: 'Country',
        type: 'string',
      },
      {
        id: 'Size of project',
        type: 'number',
      },
    ],
  },
  {
    id: 'Ecological',
    fields: [
      {
        id: 'Forest Type',
        type: 'string',
      },
      {
        id: 'Fire prevention',
        type: 'boolean',
      },
      {
        id: 'Addresses known threats',
        type: 'boolean',
      },
      {
        id: 'Discloses species used',
        type: 'boolean',
      },
    ],
  },
  {
    id: 'Economic',
    fields: [
      {
        id: 'Identify deforestation driver',
        type: 'boolean',
      },
      {
        id: 'Local seedling nurseries',
        type: 'boolean',
      },
      {
        id: 'Financial model',
        type: 'string',
      },
      {
        id: 'Follow up disclosed',
        type: 'boolean',
      },
    ],
  },
  {
    id: 'Social',
    fields: [
      {
        id: 'Has community involvement',
        type: 'boolean',
      },
      {
        id: 'Has gender component',
        type: 'boolean',
      },
    ],
  },
  {
    id: 'Institutional',
    fields: [
      {
        id: 'Organization Type',
        type: 'string',
      },
      {
        id: 'Partner Name',
        type: 'not-empty',
      },
      {
        id: 'Scientific research associated with project',
        type: 'boolean',
      },
    ],
  },
];

const filterByField = (data, fieldName, value, commaSeparated = false) =>
  data.filter(e => (commaSeparated ? e[fieldName].includes(value) : e[fieldName] === value));

const getUniqueValues = (data, fieldName, commaSeparated = false) => {
  let result;
  if (commaSeparated) {
    result = [
      ...new Set([].concat(...data.map(e => e[fieldName].split(',').map(e2 => e2.trim()))))
    ];
  } else {
    result = [...new Set(data.map(e => e[fieldName]))];
  }
  return result.filter(e => !!e).sort();
};

export const UNIQUE_COUNTRIES = getUniqueValues(CATALOGUE_DATA, 'Country');
export const UNIQUE_ORGANIZATION_TYPES = getUniqueValues(CATALOGUE_DATA, 'Organization Type');
export const UNIQUE_OBJECTIVES = getUniqueValues(CATALOGUE_DATA, 'Primary objective/purpose', true);
export const UNIQUE_APPROACHES = getUniqueValues(CATALOGUE_DATA, 'Approach', true);

export const getProjectByNumber = number =>
  CATALOGUE_DATA.find(e => e['Project Number'] === number);
