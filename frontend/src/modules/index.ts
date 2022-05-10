import { NextRouter } from 'next/router';

import { createSelector, createAsyncThunk } from '@reduxjs/toolkit';

import { deserialize, serialize } from 'utils/routing';

import createFiltersSlice, * as filtersModule from './filters';
import createRestorationSlice, * as restorationModule from './restoration';
import createSearchSlice, * as searchModule from './search';
import createSortSlice, * as sortModule from './sort';

const actions = {
  restoreState: createAsyncThunk<unknown, NextRouter['query']>('global/restoreState', (query) => {
    return deserialize(query);
  }),
};

const filtersSlice = createFiltersSlice(actions);
const searchSlice = createSearchSlice(actions);
const sortSlice = createSortSlice(actions);
const restorationSlice = createRestorationSlice(actions);

const selectors = {
  selectSerializedState: createSelector(
    [
      filtersModule.selectSerializedState,
      searchModule.selectSerializedState,
      sortModule.selectSerializedState,
    ],
    (filtersState, searchState, sortState) =>
      serialize({
        [filtersModule.SLICE_NAME]: filtersState,
        [searchModule.SLICE_NAME]: searchState,
        [sortModule.SLICE_NAME]: sortState,
      })
  ),
};

export const globalActions = actions;
export const globalSelectors = selectors;

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
export const filtersSelectors = filtersModule;

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
export const searchSelectors = searchModule;

export const sortReducer = sortSlice.reducer;
export const sortActions = sortSlice.actions;
export const sortSelectors = sortModule;

export const restorationReducer = restorationSlice.reducer;
export const restorationActions = restorationSlice.actions;
export const restorationSelectors = restorationModule;
