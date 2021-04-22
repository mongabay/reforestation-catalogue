import { configureStore, combineReducers } from '@reduxjs/toolkit';

import projectsReducer from 'modules/projects';

export default configureStore({
  reducer: combineReducers({
    projects: projectsReducer().reducer,
  }),
});
