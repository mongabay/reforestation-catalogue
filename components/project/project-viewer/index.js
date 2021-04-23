import { connect } from 'react-redux';

import { selectProjectById } from 'modules/projects';

import Component from './component';

export default connect(
  (state, { id }) => ({
    project: selectProjectById(state, id),
  }),
  {}
)(Component);
