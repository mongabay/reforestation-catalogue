import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { filtersReducer, searchReducer, sortReducer } from 'modules';
import configSlice from 'modules/config';
import projectsSlice from 'modules/projects';

const rootReducer = combineReducers({
  // TODO: remove previous reducers
  // projects: projectsSlice().reducer,
  // config: configSlice().reducer,
  filters: filtersReducer,
  search: searchReducer,
  sort: sortReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = RootStore['dispatch'];
export default createWrapper<RootStore>(makeStore);
