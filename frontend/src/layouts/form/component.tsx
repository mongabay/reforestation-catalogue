import React, { useState } from 'react';

import cx from 'classnames';

import { omit } from 'lodash-es';

import Button from 'components/button';
import LayoutContainer from 'components/layout-container';
import NewsletterSignup from 'components/newsletter-signup';
import Footer from 'layouts/static-page/footer';

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
      <div className="py-12 text-white md:py-32 bg-orange">
        <LayoutContainer>
          <p className="font-serif text-3xl md:text-[40px] md:leading-tight max-w-3xl font-bold">
            Subscribe to our newsletter to find out about reforestation projects, original stories,
            activism awareness and more.
          </p>
          <Button
            theme="primary-white"
            onClick={() => setShowNewsletterSignup(true)}
            className="justify-center mt-10 md:inline-flex md:mt-20 md:px-12"
          >
            <span className="text-orange">Subscribe</span>
          </Button>
        </LayoutContainer>
      </div>
      <Footer props={footerProps} />
    </div>
  );
};

export default FormLayout;
