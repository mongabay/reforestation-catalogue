import { connect } from 'react-redux';

import projectsSlice, {
  selectCountries,
  selectCountry,
  selectTotalNumberOfProjects,
  selectFilteredProjects,
  selectFilters,
  selectSort,
} from 'modules/projects';
import configSlice, { selectProjectsConfig } from 'modules/config';
import Component from './component';

const projectsActions = projectsSlice().actions;
const configActions = configSlice().actions;

export default connect(
  state => {
    return {
      projects: selectFilteredProjects(state),
      countries: selectCountries(state),
      sort: selectSort(state),
      country: selectCountry(state),
      filters: selectFilters(state),
      totalNumberOfProjects: selectTotalNumberOfProjects(state),
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
