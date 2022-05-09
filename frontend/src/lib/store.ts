import { configureStore, combineReducers } from '@reduxjs/toolkit';

import configSlice from 'modules/config';
import filtersSlice from 'modules/filters';
import projectsSlice from 'modules/projects';

// TODO: remove unused reducers
const rootReducer = combineReducers({
  projects: projectsSlice().reducer,
  config: configSlice().reducer,
  filters: filtersSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
