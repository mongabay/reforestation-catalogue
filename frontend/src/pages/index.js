import React, { useState, useEffect } from 'react';

// layout
import StaticPage from 'layout/static-page';
import HomeLayout from 'layout/pages/home';

function HomePage(props) {
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
    <StaticPage
      className="p-home"
      meta={{
        title: 'Mongabay Reforestation Catalogue',
        description: 'Welcome to Mongabay’s directory of reforestation and tree-planting projects.',
        thumbnailURL: 'https://reforestation.app/images/mongabay-meta-image.png',
      }}
    >
      <HomeLayout {...props} initialQuery={initialQuery} />
    </StaticPage>
  );
}

export default HomePage;
