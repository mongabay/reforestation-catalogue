import { connect } from 'react-redux';

import projectsSlice, { selectCountries, selectFilteredProjects } from 'modules/projects';
import Component from './component';

const projectsActions = projectsSlice().actions;

export default connect(
  state => ({
    projects: selectFilteredProjects(state),
    countries: selectCountries(state),
  }),
  {
    addFilter: projectsActions.addFilter,
    removeFilter: projectsActions.removeFilter,
    updateData: projectsActions.updateData,
    updateCountry: projectsActions.updateCountry,
    updateSort: projectsActions.updateSort,
  }
)(Component);
