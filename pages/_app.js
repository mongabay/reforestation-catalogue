import React from 'react';
import PropTypes from 'prop-types';

import 'css/index.scss';

const SatelliteStampApp = ({ Component, pageProps }) => <Component {...pageProps} />;

SatelliteStampApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any,
};

SatelliteStampApp.defaultProps = {
  pageProps: {},
};

export default SatelliteStampApp;
