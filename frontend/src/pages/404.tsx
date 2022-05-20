import React from 'react';

import Button from 'components/button';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { PageComponent } from 'types';

export const Error404Page: PageComponent<{}, StaticPageLayoutProps> = () => (
  <LayoutContainer className="py-24">
    <Head title="404 Page not found" />
    <div className="min-h-full px-4 py-16 bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-green sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Page not found</h1>
              <p className="mt-3 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Button to="/">Go back home</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </LayoutContainer>
);

export default Error404Page;
