import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadComponent = ({ title, description }) => (
  <Head>
    <title key="title">{title ? `${title} | Reforestation Catalogue` : 'Reforestation Catalogue'}</title>
    <meta
      key="description"
      name="description"
      content={description ? description : 'Reforestation Catalogue.'}
    />
  </Head>
);

HeadComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

HeadComponent.defaultProps = {
  title: null,
  description: null,
};

export default HeadComponent;
