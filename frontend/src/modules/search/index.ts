import { createSelector, createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { RootState } from 'lib/store';
import { HYDRATE } from 'next-redux-wrapper';

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
    extraReducers: (builder) => {
      builder.addCase(HYDRATE, (state, action: AnyAction) => {
        if (action.payload[SLICE_NAME] !== INITIAL_STATE) {
          return action.payload[SLICE_NAME];
        }

        return state;
      });
      builder.addCase(
        globalActions.restoreState.fulfilled,
        (state, action: PayloadAction<unknown>) => {
          const stateToRestore: typeof INITIAL_STATE = action.payload[SLICE_NAME] ?? INITIAL_STATE;
          return stateToRestore;
        }
      );
    },
  });
