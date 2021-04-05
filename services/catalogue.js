import { CATALOGUE_DATA } from 'utils/catalogue-data';

export const UNIQUE_COUNTRIES = [...new Set(CATALOGUE_DATA.map(e => e.Country))].sort();
