import React from 'react';

// layout
import StaticPage from 'layout/static-page';
import HomeLayout from 'layout/pages/home';

function HomePage() {
  return (
    <StaticPage className="p-home">
      <HomeLayout />
    </StaticPage>
  );
}

export default HomePage;
