import {
  SOCIAL_CATEGORY,
  ECONOMIC_CATEGORY,
  CONTEXT_CATEGORY,
  ECOLOGICAL_CATEGORY,
  INSTITUTIONAL_CATEGORY,
  getCategoryByID,
} from 'services/catalogue';

export const getProjectCategoriesPercentage = project => ({
  [CONTEXT_CATEGORY]: getPercentageForCategory(project, CONTEXT_CATEGORY),
  [ECONOMIC_CATEGORY]: getPercentageForCategory(project, ECONOMIC_CATEGORY),
  [ECOLOGICAL_CATEGORY]: getPercentageForCategory(project, ECOLOGICAL_CATEGORY),
  [INSTITUTIONAL_CATEGORY]: getPercentageForCategory(project, INSTITUTIONAL_CATEGORY),
  [SOCIAL_CATEGORY]: getPercentageForCategory(project, SOCIAL_CATEGORY),
});

const getPercentageForCategory = (project, category) => {
  let fieldsWithData = 0;
  const contextFields = getCategoryByID(category).fields;
  const numberOfFields = contextFields.length;
  contextFields.forEach(cc => {
    const { type, id } = cc;
    const value = project[id];
    if ((type === 'string' || type === 'number' || type === 'not-empty') && !!value) {
      fieldsWithData++;
    }
    if (type === 'boolean' && value === 'YES') {
      fieldsWithData++;
    }
  });

  return (fieldsWithData * 100.0) / numberOfFields;
};

export const getUniqueValuesForField = (projects, propertyName, commaSeparated) => {
  let tempSet;
  console.log('propertyName', propertyName, 'comma', commaSeparated);
  if (commaSeparated) {
    tempSet = new Set(
      [].concat(
        ...projects.map(e => (e[propertyName] ? e[propertyName].trim().split(',') : null)).sort()
      )
    );
  } else {
    tempSet = new Set(projects.map(e => e[propertyName]).sort());
  }
  return [...tempSet];
};
