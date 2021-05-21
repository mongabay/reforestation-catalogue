import React from 'react';

// layout
import StaticPage from 'layout/static-page';
import AboutLayout from 'layout/pages/about';

const AboutPage: React.FC = () => {
  return (
    <StaticPage
      className="p-about"
      meta={{
        title: 'Mongabay Reforestation Catalogue',
        description: 'Welcome to Mongabay’s directory of reforestation and tree-planting projects.',
        thumbnailURL: 'https://reforestation.app/images/mongabay-meta-image.png',
      }}
    >
      <AboutLayout />
    </StaticPage>
  );
};

export default AboutPage;
