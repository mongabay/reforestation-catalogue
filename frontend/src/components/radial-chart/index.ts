import { connect } from 'react-redux';

import projectsSlice from 'modules/projects';

import Component from './component';

const projectsActions = projectsSlice().actions;

export default connect(null, {
  updateSort: projectsActions.updateSort,
})(Component);
