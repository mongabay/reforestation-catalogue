import React from 'react';
import PropTypes from 'prop-types';
import { AnimateSharedLayout } from 'framer-motion';
import { Provider } from 'react-redux';

import store from 'lib/store';

import 'css/index.scss';

const ReforestationCatalogueApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
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
