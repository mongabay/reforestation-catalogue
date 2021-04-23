import { connect } from 'react-redux';

import { selectData } from 'modules/projects';

import Component from './component';

export default connect(
  state => ({
    projects: selectData(state),
  }),
  null
)(Component);
