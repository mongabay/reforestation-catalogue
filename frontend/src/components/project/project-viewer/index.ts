import { connect } from 'react-redux';

import { selectData } from 'modules/projects';
import { selectCategories, selectButtons } from 'modules/config';

import Component from './component';

export default connect(
  state => ({
    projects: selectData(state),
    categoriesConfig: selectCategories(state),
    suggestPageEditsURL: selectButtons(state).suggestPageEditsURL,
  }),
  null
)(Component);
