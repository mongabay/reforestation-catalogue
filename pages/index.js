import React from 'react';

// layout
import StaticPage from 'layout/static-page';
import HomeLayout from 'layout/pages/home';

function HomePage(props) {
  return (
    <StaticPage className="p-home">
      <HomeLayout {...props} />
    </StaticPage>
  );
}

HomePage.getInitialProps = async props => {
  return { initialQuery: props.query };
};

export default HomePage;
