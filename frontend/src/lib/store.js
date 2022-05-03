import { configureStore, combineReducers } from '@reduxjs/toolkit';

import configSlice from 'modules/config';
import projectsSlice from 'modules/projects';

export default configureStore({
  reducer: combineReducers({
    projects: projectsSlice().reducer,
    config: configSlice().reducer,
  }),
});
