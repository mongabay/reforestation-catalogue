import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { RootState } from 'lib/store';
import { Categories } from 'types';

export const SLICE_NAME = 'sort';
const INITIAL_STATE: Categories = Categories.Context as Categories;

export const selectSort = (state: RootState): typeof INITIAL_STATE => state[SLICE_NAME];

export const selectSerializedState = createSelector([selectSort], (sort) => {
  return sort;
});

export default (globalActions) =>
  createSlice({
    name: SLICE_NAME,
    initialState: INITIAL_STATE,
    reducers: {
      updateSort(state, action: PayloadAction<Categories>) {
        return action.payload;
      },
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        if (action.payload[SLICE_NAME] !== INITIAL_STATE) {
          return action.payload[SLICE_NAME];
        }

        return state;
      },
      [globalActions.restoreState.fulfilled]: (state, action: PayloadAction<unknown>) => {
        const stateToRestore: typeof INITIAL_STATE = action.payload[SLICE_NAME] ?? INITIAL_STATE;
        return stateToRestore;
      },
    },
  });
