import React from 'react';

import { Provider } from 'react-redux';

import Script from 'next/script';

import { AnimateSharedLayout } from 'framer-motion';
import PropTypes from 'prop-types';

import store from 'lib/store';

// import 'css/index.scss';
import 'styles/globals.css';

const ReforestationCatalogueApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    {/* Google Analytics G4 (back-up in case Tag Manager doesn't work) */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T9GHWQF8VW" />
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
