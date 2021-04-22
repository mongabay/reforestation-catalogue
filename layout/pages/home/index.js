import { connect } from 'react-redux';

import projectsActions, { selectFilteredProjects } from 'modules/projects';
import Component from './component';

export default connect(
  state => ({
    projects: selectFilteredProjects(state),
  }),
  {
    addFilter: projectsActions.addFilter,
    removeFilter: projectsActions.removeFilter,
    updateData: projectsActions.updateData,
    updateCountry: projectsActions.updateCountry,
  }
)(Component);
