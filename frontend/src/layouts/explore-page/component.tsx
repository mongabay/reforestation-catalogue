import React from 'react';

import cx from 'classnames';

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
  <div {...rest} className="md:flex md:flex-col md:h-screen bg-green-dark">
    <BackroundGlow />
    <Header {...headerProps} className="relative z-10 flex-shrink-0" />
    <main
      {...omit(mainProps, 'className')}
      className={cx({
        'flex-grow-1 md:h-full md:max-w-[1920px] md:mx-auto w-full md:overflow-hidden': true,
        [mainProps?.className]: !!mainProps?.className,
      })}
    >
      {children}
    </main>
  </div>
);

export default ExplorePageLayout;
