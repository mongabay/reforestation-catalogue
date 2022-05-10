import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { filtersReducer } from 'modules';
import configSlice from 'modules/config';
import projectsSlice from 'modules/projects';

const rootReducer = combineReducers({
  projects: projectsSlice().reducer,
  config: configSlice().reducer,
  filters: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
