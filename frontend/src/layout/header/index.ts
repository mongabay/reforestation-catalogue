import { connect } from 'react-redux';
import { selectButtons } from 'modules/config';

import Component from './component';

export default connect(
  state => ({
    submitProjectInformationURL: selectButtons(state).submitProjectInformationURL,
  }),
  null
)(Component);
