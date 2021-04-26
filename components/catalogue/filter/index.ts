import { connect } from 'react-redux';
import projectsSlice, { selectFilteredProjects, selectFilters } from 'modules/projects';

import Component from './component';

const projectsActions = projectsSlice().actions;

export default connect(
  state => {
    return {
      filters: selectFilters(state),
      projects: selectFilteredProjects(state),
    };
  },
  {
    addFilter: projectsActions.addFilter,
  }
)(Component);
