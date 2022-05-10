import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'lib/store';

export const SLICE_NAME = 'restoration';
const INITIAL_STATE: boolean = false as boolean;

export const selectRestoration = (state: RootState): typeof INITIAL_STATE => state[SLICE_NAME];

export default (globalActions) =>
  createSlice({
    name: SLICE_NAME,
    initialState: INITIAL_STATE,
    reducers: {
      updateRestoration(state, action: PayloadAction<boolean>) {
        return action.payload;
      },
    },
  });
