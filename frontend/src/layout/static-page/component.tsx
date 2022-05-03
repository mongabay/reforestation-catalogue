import React from 'react';

import classNames from 'classnames';

import PropTypes from 'prop-types';

import Head from 'components/head';
import Icons from 'components/icons';

const StaticPage = ({ className, children, meta }) => (
  <div className={classNames('l-simple-page', className)}>
    <Head meta={meta} />
    <main className="l-static-page">{children}</main>
    <Icons />
  </div>
);

StaticPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StaticPage.defaultProps = { className: null };

export default StaticPage;
