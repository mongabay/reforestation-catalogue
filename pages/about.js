import React from 'react';

// layout
import StaticPage from 'layout/static-page';
import AboutLayout from 'layout/pages/about';

function AboutPage(props) {
  return (
    <StaticPage
      className="p-about"
      meta={{
        title: 'Mongabay Reforestation Catalogue',
        description: 'Welcome to Mongabay’s directory of reforestation and tree-planting projects.',
        thumbnailURL: 'https://reforestation.app/images/mogabay-meta-image.png',
      }}
    >
      <AboutLayout {...props} />
    </StaticPage>
  );
}

AboutPage.getInitialProps = async props => {
  return { initialQuery: props.query };
};

export default AboutPage;
