import React, { useState, useEffect } from 'react';

// layout
import Head from 'components/head';
import HomeLayout from 'layout/pages/home';
import { StaticPageLayoutProps } from 'layout/static-page';
import { PageComponent } from 'types';

export const ExplorePage: PageComponent<{}, StaticPageLayoutProps> = (props) => {
  const [initialQuery, setInitialQuery] = useState(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Function to decode URL params to object used from https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object
      try {
        const search = location.search.substring(1);
        const queryParams = JSON.parse(
          '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
          (key, value) => {
            return key === '' ? value : decodeURIComponent(value);
          }
        );
        setInitialQuery(queryParams);
      } catch (error) {
        setInitialQuery({});
      }
    }
  }, []);

  if (!initialQuery) return null;

  return (
    <>
      <Head />
      <HomeLayout {...props} initialQuery={initialQuery} />
    </>
  );
};

export default ExplorePage;
