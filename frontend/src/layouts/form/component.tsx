import React, { useState } from 'react';

import cx from 'classnames';

import Footer from 'layouts/static-page/footer';
import { omit } from 'lodash-es';

import NewsletterSignup from 'components/newsletter-signup';
import StayUpdatedSection from 'components/stay-updated-section';

import Header from '../static-page/header';

import { FormLayoutProps } from './types';

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  headerProps = {},
  mainProps,
  footerProps,
  ...rest
}: FormLayoutProps) => {
  const [showNewsletterSignup, setShowNewsletterSignup] = useState(false);

  return (
    <div {...rest}>
      <Header {...headerProps} />
      <NewsletterSignup
        open={showNewsletterSignup}
        onDismiss={() => setShowNewsletterSignup(false)}
      />
      <main
        {...omit(mainProps, 'className')}
        className={cx({
          [mainProps?.className]: !!mainProps?.className,
        })}
      >
        {children}
      </main>
      <StayUpdatedSection
        showNewsletterSignup={showNewsletterSignup}
        setShowNewsletterSignup={setShowNewsletterSignup}
      />
      <Footer props={footerProps} />
    </div>
  );
};

export default FormLayout;
