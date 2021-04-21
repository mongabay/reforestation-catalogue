import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from 'lib/store';

import 'css/index.scss';

const ReforestationCatalogueApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

ReforestationCatalogueApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any,
};

ReforestationCatalogueApp.defaultProps = {
  pageProps: {},
};

export default ReforestationCatalogueApp;
