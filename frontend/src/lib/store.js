import { configureStore, combineReducers } from '@reduxjs/toolkit';

import projectsSlice from 'modules/projects';
import configSlice from 'modules/config';

export default configureStore({
  reducer: combineReducers({
    projects: projectsSlice().reducer,
    config: configSlice().reducer,
  }),
});
