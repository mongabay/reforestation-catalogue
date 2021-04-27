import { createSlice, createSelector } from '@reduxjs/toolkit';
import { FilterModes, FilterTypes, COUNTRIES_SPECIAL_VALUES, SORT_OPTIONS } from 'types';

import { getProjectCategoriesPercentage } from 'utils/project';

export const SLICE_NAME = 'projects';

export const selectFilters = state => state[SLICE_NAME].filters;
export const selectCountry = state => state[SLICE_NAME].country;
export const selectData = state => state[SLICE_NAME].data;
export const selectSort = state => state[SLICE_NAME].sort;

export const selectCountries = createSelector([selectData], projects =>
  [COUNTRIES_SPECIAL_VALUES.ALL, ...new Set(projects.map(e => e.country))].sort()
);

export const selectFilteredProjects = createSelector(
  [selectData, selectFilters, selectCountry, selectSort],
  (data, filters, country, sort) => {
    let result = [...data];
    if (country && country !== 'All') {
      result = result.filter(p => p.country === country);
    }
    filters.forEach(filter => {
      console.log('in! filter', filter);
      if (filter.mode === FilterModes.Exact) {
        result = result.filter(p => p[filter.propertyName] === filter.value);
      } else if (filter.mode === FilterModes.Includes) {
        result = result.filter(p =>
          p[filter.propertyName] ? p[filter.propertyName].includes(filter.value) : false
        );
      } else if (
        filter.mode === FilterModes.GreaterOrEqualThan &&
        filter.type === FilterTypes.Number
      ) {
        result = result.filter(p => p[filter.propertyName] >= filter.value);
      }
    });

    if (sort) {
      result = result.sort((a, b) => {
        if (sort === SORT_OPTIONS.ALPHABETICAL_OPTION) {
          return a.projectName > b.projectName ? 1 : -1; // eslint-disable-line
        } else if (sort === SORT_OPTIONS.START_DATE_OPTION) {
          return a.startYear > b.startYear ? 1 : -1; // eslint-disable-line
        } else if (sort === SORT_OPTIONS.END_DATE_OPTION) {
          return a.endYear > b.endYear ? 1 : -1; // eslint-disable-line
        } else if (sort === SORT_OPTIONS.ECOLOGICAL_OPTION) {
          const aEcoValue = getProjectCategoriesPercentage(a)[SORT_OPTIONS.ECOLOGICAL_CATEGORY];
          const bEcoValue = getProjectCategoriesPercentage(b)[SORT_OPTIONS.ECOLOGICAL_CATEGORY];
          return bEcoValue - aEcoValue;
        }
      });
    }

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
      sort: null,
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
      updateSort(state, action) {
        state.sort = action.payload;
      },
      updateFilters(state, action) {
        state.filters = action.payload;
      },
      loadInitialState(state, action) {
        const newState = action.payload;
        state.country = newState.country;
        state.sort = newState.sort || SORT_OPTIONS.ALPHABETICAL_OPTION;
        state.filters = newState.filters || [];
      },
    },
  });
