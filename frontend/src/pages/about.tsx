import React from 'react';

import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import AboutLayout from 'layouts/pages/about';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { PageComponent } from 'types';

export const AboutPage: PageComponent<{}, StaticPageLayoutProps> = (props) => {
  return (
    <LayoutContainer>
      <Head />
      <AboutLayout {...props} />
    </LayoutContainer>
  );
};

export default AboutPage;
