import React from 'react';

import cx from 'classnames';

import Footer from 'layouts/static-page/footer';
import Header from 'layouts/static-page/header';
import { omit } from 'lodash-es';

import BackroundGlow from 'components/background-glow';

import { ExplorePageLayoutProps } from './types';

export const ExplorePageLayout: React.FC<ExplorePageLayoutProps> = ({
  children,
  headerProps,
  mainProps,
  ...rest
}: ExplorePageLayoutProps) => (
  <div {...rest} className="md:flex md:flex-col bg-green-dark">
    <BackroundGlow />
    <Header {...headerProps} className="relative z-10 flex-shrink-0" />
    <main
      {...omit(mainProps, 'className')}
      className={cx({
        'flex-grow-1 md:h-full md:max-w-[1920px] md:mx-auto flex md:flex-col w-full': true,
        [mainProps?.className]: !!mainProps?.className,
      })}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default ExplorePageLayout;
