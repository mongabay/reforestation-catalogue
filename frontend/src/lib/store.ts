import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { filtersReducer, restorationReducer, searchReducer, sortReducer } from 'modules';
import configSlice from 'modules/config';
import projectsSlice from 'modules/projects';

const rootReducer = combineReducers({
  projects: projectsSlice().reducer,
  config: configSlice().reducer,
  filters: filtersReducer,
  search: searchReducer,
  sort: sortReducer,
  restoration: restorationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
