import { connect } from 'react-redux';

import projectsSlice, { selectCountries, selectFilteredProjects } from 'modules/projects';
import Component from './component';

export default connect(
  state => ({
    projects: selectFilteredProjects(state),
    countries: selectCountries(state),
  }),
  {
    addFilter: projectsSlice().actions.addFilter,
    removeFilter: projectsSlice().actions.removeFilter,
    updateData: projectsSlice().actions.updateData,
    updateCountry: projectsSlice().actions.updateCountry,
  }
)(Component);
