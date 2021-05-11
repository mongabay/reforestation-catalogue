import { connect } from 'react-redux';

import configSlice, { selectAboutPageConfig } from 'modules/config';

import Component from './component';

const configActions = configSlice().actions;

export default connect(
  state => {
    return {
      aboutPage: selectAboutPageConfig(state),
    };
  },
  { setConfig: configActions.setConfig }
)(Component);
