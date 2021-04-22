import { createSlice, createSelector } from '@reduxjs/toolkit';
import { FilterModes, FilterTypes, COUNTRIES_SPECIAL_VALUES } from 'types';

export const SLICE_NAME = 'projects';

export const selectFilters = state => state[SLICE_NAME].filters;
export const selectCountry = state => state[SLICE_NAME].country;
export const selectData = state => state[SLICE_NAME].data;

export const selectCountries = createSelector([selectData], projects =>
  [COUNTRIES_SPECIAL_VALUES.ALL, ...new Set(projects.map(e => e.country))].sort()
);

export const selectFilteredProjects = createSelector(
  [selectData, selectFilters, selectCountry],
  (data, filters, country) => {
    console.log('hey!!');
    let result = [...data];
    if (country && country !== 'All') {
      result = result.filter(p => p.country === country);
    }
    filters.forEach(filter => {
      if (filter.mode === FilterModes.Exact) {
        result = result.filter(p => p[filter.propertyName] === filter.value);
      } else if (filter.mode === FilterModes.Includes) {
        result = result.filter(p => p[filter.propertyName].includes(filter.value));
      } else if (
        filter.mode === FilterModes.GreaterOrEqualThan &&
        filter.type === FilterTypes.Number
      ) {
        result = result.filter(p => p[filter.propertyName] >= filter.value);
      }
    });
    return result;
  }
);

export default projectsActions =>
  createSlice({
    name: SLICE_NAME,
    initialState: {
      country: 'All',
      filters: [],
      data: [],
    },
    reducers: {
      updateData(state, action) {
        state.data = action.payload;
      },
      addFilter(state, action) {
        state.filters.push(action.payload);
      },
      removeFilter(state, action) {
        state.filters = state.filters.filter(f => f.propertyName !== action.payload.propertyName);
      },
      updateCountry(state, action) {
        state.country = action.payload;
      },
    },
  });
