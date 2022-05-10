import { NextRouter } from 'next/router';

import { createSelector, createAsyncThunk } from '@reduxjs/toolkit';

import { deserialize, serialize } from 'utils/routing';

import createFiltersSlice, * as filtersModule from './filters';

const actions = {
  restoreState: createAsyncThunk<unknown, NextRouter['query']>('global/restoreState', (query) => {
    return deserialize(query);
  }),
};

const filtersSlice = createFiltersSlice(actions);

const selectors = {
  selectSerializedState: createSelector([filtersModule.selectSerializedState], (filtersState) =>
    serialize({
      [filtersModule.SLICE_NAME]: filtersState,
    })
  ),
};

export const globalActions = actions;
export const globalSelectors = selectors;

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
export const filtersSelectors = filtersModule;
