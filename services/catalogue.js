import { CATALOGUE_DATA } from 'utils/catalogue-data';

export const UNIQUE_COUNTRIES = [...new Set(CATALOGUE_DATA.map(e => e.Country))]
  .filter(e => !!e)
  .sort();
export const UNIQUE_ORGANIZATION_TYPES = [
  ...new Set(CATALOGUE_DATA.map(e => e['Organization Type']))
]
  .filter(e => !!e)
  .sort();
export const UNIQUE_OBJECTIVES = [
  ...new Set(CATALOGUE_DATA.map(e => e['Primary objective/purpose']))
]
  .filter(e => !!e)
  .sort();
export const UNIQUE_APPROACHES = [
  ...new Set([].concat(...CATALOGUE_DATA.map(e => e.Approach.split(',').map(e2 => e2.trim())))),
]
  .filter(e => !!e)
  .sort();

export const getOrganizationTypesFiltered = ({
  country,
  objective,
  approach,
  genderCommunityInvolvement,
}) => {
  let filteredResults = CATALOGUE_DATA;
  if (country) {
    filteredResults = filteredResults.filter(e => e.Country === country);
  }
  if (objective) {
    filteredResults = filteredResults.filter(e => e['Primary objective/purpose'] === objective);
  }
  if (approach) {
    filteredResults = filteredResults.filter(e =>
      e['Primary objective/purpose'].includes(approach)
    );
  }
  if (genderCommunityInvolvement) {
    filteredResults = filteredResults.filter(
      e =>
        e['Has gender component'] === genderCommunityInvolvement ||
        e['Has community involvement'] === genderCommunityInvolvement
    );
  }
  return [
    ...new Set(filteredResults.map(e => e['Organization Type']))
  ]
    .filter(e => !!e)
    .sort();
};

export const getObjectivesFiltered = ({
  country,
  organizationType,
  approach,
  genderCommunityInvolvement,
}) => {
  let filteredResults = CATALOGUE_DATA;
  if (country) {
    filteredResults = filteredResults.filter(e => e.Country === country);
  }
  if (organizationType) {
    filteredResults = filteredResults.filter(e => e['Organization Type'] === organizationType);
  }
  if (approach) {
    filteredResults = filteredResults.filter(e =>
      e['Primary objective/purpose'].includes(approach)
    );
  }
  if (genderCommunityInvolvement) {
    filteredResults = filteredResults.filter(
      e =>
        e['Has gender component'] === genderCommunityInvolvement ||
        e['Has community involvement'] === genderCommunityInvolvement
    );
  }
  return  [
    ...new Set(filteredResults.map(e => e['Primary objective/purpose']))
  ]
    .filter(e => !!e)
    .sort();
};

export const getApproachesFiltered = ({
  country,
  organizationType,
  objective,
  genderCommunityInvolvement,
}) => {
  let filteredResults = CATALOGUE_DATA;
  if (country) {
    filteredResults = filteredResults.filter(e => e.Country === country);
  }
  if (organizationType) {
    filteredResults = filteredResults.filter(e => e['Organization Type'] === organizationType);
  }
  if (objective) {
    filteredResults = filteredResults.filter(e => e['Primary objective/purpose'] === objective);
  }
  if (genderCommunityInvolvement) {
    filteredResults = filteredResults.filter(
      e =>
        e['Has gender component'] === genderCommunityInvolvement ||
        e['Has community involvement'] === genderCommunityInvolvement
    );
  }
  return [
    ...new Set([].concat(...filteredResults.map(e => e.Approach.split(',').map(e2 => e2.trim())))),
  ]
    .filter(e => !!e)
    .sort();;
};

export const getCatalogueFiltered = ({
  country,
  organizationType,
  objective,
  approach,
  genderCommunityInvolvement,
}) => {
  let filteredResults = CATALOGUE_DATA;
  if (country) {
    filteredResults = filteredResults.filter(e => e.Country === country);
  }
  if (organizationType) {
    filteredResults = filteredResults.filter(e => e['Organization Type'] === organizationType);
  }
  if (objective) {
    filteredResults = filteredResults.filter(e => e['Primary objective/purpose'] === objective);
  }
  if (approach) {
    filteredResults = filteredResults.filter(e =>
      e['Primary objective/purpose'].includes(approach)
    );
  }
  if (genderCommunityInvolvement) {
    filteredResults = filteredResults.filter(
      e =>
        e['Has gender component'] === genderCommunityInvolvement ||
        e['Has community involvement'] === genderCommunityInvolvement
    );
  }
  return filteredResults;
};
