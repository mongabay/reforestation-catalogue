import { createSlice } from '@reduxjs/toolkit';

export const SLICE_NAME = 'config';

export const selectAboutPageConfig = state => state[SLICE_NAME].aboutPage;
export const selectProjectsConfig = state => state[SLICE_NAME].projectsPage;
export const selectProjectDetailConfig = state => state[SLICE_NAME].projectDetailPage;
export const selectCategories = state => state[SLICE_NAME].categories;

export default configActions =>
  createSlice({
    name: SLICE_NAME,
    initialState: {
      aboutPage: {},
      projectsPage: {},
      projectDetailPage: {},
      categories: [],
    },
    reducers: {
      setConfig(state, action) {
        const { aboutPage, projectsPage, projectDetailPage, categories } = action.payload;
        state.aboutPage = aboutPage;
        state.projectsPage = projectsPage;
        state.projectDetailPage = projectDetailPage;
        state.categories = categories;
      },
    },
  });
