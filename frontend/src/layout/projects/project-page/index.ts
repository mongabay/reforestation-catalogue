import { connect } from 'react-redux';
import { selectData } from 'modules/projects';

import projectsSlice from 'modules/projects';
import { selectCategories } from 'modules/config';

import Component from './component';

const projectsActions = projectsSlice().actions;

export default connect(
  state => {
    return {
      projects: selectData(state),
    };
  },
  {
    updateData: projectsActions.updateData,
  }
)(Component);
