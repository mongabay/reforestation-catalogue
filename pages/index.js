import React from 'react';

// layout
import StaticPage from 'layout/static-page';
import HomeLayout from 'layout/pages/home';

function HomePage(props) {
  return (
    <StaticPage
      className="p-home"
      meta={{
        title: 'Mongabay Reforestation Catalogue',
        description: 'Welcome to Mongabay’s directory of reforestation and tree-planting projects.',
        thumbnailURL: 'https://reforestation.app/images/mongabay-meta-image.png',
      }}
    >
      <HomeLayout {...props} />
    </StaticPage>
  );
}

HomePage.getInitialProps = async props => {
  return { initialQuery: props.query };
};

export default HomePage;
