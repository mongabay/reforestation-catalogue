import React from 'react';

import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { PageComponent } from 'types';

export const HomePage: PageComponent<{}, StaticPageLayoutProps> = () => (
  <LayoutContainer className="py-24">
    <Head />
    Hello World!
  </LayoutContainer>
);

export default HomePage;
