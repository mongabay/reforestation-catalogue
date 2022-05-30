import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEqual } from 'lodash-es';
import { HYDRATE } from 'next-redux-wrapper';

import { RootState } from 'lib/store';
import { Filter } from 'types';

export const SLICE_NAME = 'filters';
const INITIAL_STATE: Filter[] = [];

export const selectFilters = (state: RootState): typeof INITIAL_STATE => state[SLICE_NAME];

export const selectSerializedState = createSelector([selectFilters], (filters) => {
  return filters;
});

export default (globalActions) =>
  createSlice({
    name: SLICE_NAME,
    initialState: INITIAL_STATE,
    reducers: {
      addFilter(state, action: PayloadAction<Filter>) {
        const index = state.findIndex((filter) => filter.field === action.payload.field);

        if (index !== -1) {
          state.splice(index, 1, action.payload);
        } else {
          state.push(action.payload);
        }
      },
      removeFilter(state, action: PayloadAction<Filter>) {
        return state.filter((filter) => filter.field !== action.payload.field);
      },
      clearFilters() {
        return INITIAL_STATE;
      },
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        if (!isEqual(action.payload[SLICE_NAME], INITIAL_STATE)) {
          return action.payload[SLICE_NAME];
        }

        return state;
      },
      [globalActions.restoreState.fulfilled]: (state, action: PayloadAction<unknown>) => {
        const stateToRestore: typeof INITIAL_STATE = action.payload[SLICE_NAME] ?? INITIAL_STATE;
        return [...(Array.isArray(stateToRestore) ? stateToRestore : [stateToRestore])];
      },
    },
  });
