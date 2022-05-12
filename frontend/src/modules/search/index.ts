import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { RootState } from 'lib/store';

export const SLICE_NAME = 'search';
const INITIAL_STATE: string = '';

export const selectSearch = (state: RootState): typeof INITIAL_STATE => state[SLICE_NAME];

export const selectSerializedState = createSelector([selectSearch], (search) => {
  return search;
});

export default (globalActions) =>
  createSlice({
    name: SLICE_NAME,
    initialState: INITIAL_STATE,
    reducers: {
      replaceSearch(state, action: PayloadAction<string>) {
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
