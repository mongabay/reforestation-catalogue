import React, { useState } from 'react';

import cx from 'classnames';

import { omit } from 'lodash-es';

import BackroundGlow from 'components/background-glow';
import NewsletterSignup from 'components/newsletter-signup';

import Footer from './footer';
import Header from './header';
import { StaticPageLayoutProps } from './types';

export const StaticPageLayout: React.FC<StaticPageLayoutProps> = ({
  children,
  headerProps = {},
  mainProps,
  footerProps,
  ...rest
}: StaticPageLayoutProps) => {
  const [showNewsletterSignup, setShowNewsletterSignup] = useState(false);

  return (
    <div className="bg-green-dark" {...rest}>
      <BackroundGlow />
      <Header {...headerProps} onOpenNewsletterSignup={() => setShowNewsletterSignup(true)} />
      <main
        {...omit(mainProps, 'className')}
        className={cx({
          [mainProps?.className]: !!mainProps?.className,
        })}
      >
        {children}
      </main>
      <Footer {...footerProps} onOpenNewsletterSignup={() => setShowNewsletterSignup(true)} />
      <NewsletterSignup
        open={showNewsletterSignup}
        onDismiss={() => setShowNewsletterSignup(false)}
      />
    </div>
  );
};

export default StaticPageLayout;
