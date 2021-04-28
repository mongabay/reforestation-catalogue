import React from 'react';

// layout
import StaticPage from 'layout/static-page';
import AboutLayout from 'layout/pages/about';

function AboutPage(props) {
  return (
    <StaticPage className="p-about">
      <AboutLayout {...props} />
    </StaticPage>
  );
}

AboutPage.getInitialProps = async props => {
  return { initialQuery: props.query };
};

export default AboutPage;
