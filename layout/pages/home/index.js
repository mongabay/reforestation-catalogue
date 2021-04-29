import { connect } from 'react-redux';

import projectsSlice, { selectCountries, selectFilteredProjects } from 'modules/projects';
import configSlice, { selectProjectsConfig } from 'modules/config';
import Component from './component';

const projectsActions = projectsSlice().actions;
const configActions = configSlice().actions;

export default connect(
  state => {
    return {
      projects: selectFilteredProjects(state),
      countries: selectCountries(state),
      sort: state.projects.sort,
      country: state.projects.country,
      filters: state.projects.filters,
      projectsPage: selectProjectsConfig(state),
    };
  },
  {
    addFilter: projectsActions.addFilter,
    removeFilter: projectsActions.removeFilter,
    updateData: projectsActions.updateData,
    updateCountry: projectsActions.updateCountry,
    updateSort: projectsActions.updateSort,
    updateFilters: projectsActions.updateFilters,
    loadInitialState: projectsActions.loadInitialState,
    setConfig: configActions.setConfig,
  }
)(Component);
