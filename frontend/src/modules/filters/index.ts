import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'lib/store';
import { Filter } from 'types';

const SLICE_NAME = 'filters';
const INITIAL_STATE: Filter[] = [];

export const selectFilters = (state: RootState) => state[SLICE_NAME];

const filtersSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    addFilter(state, action: PayloadAction<Filter>) {
      state.push(action.payload);
    },
    removeFilter(state, action: PayloadAction<Filter>) {
      return state.filter((filter) => filter.field !== action.payload.field);
    },
    clearFilters() {
      return INITIAL_STATE;
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
