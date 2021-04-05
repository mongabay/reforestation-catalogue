import React from 'react';

import StaticPage from 'layout/static-page';

import './style.scss';

const HomePage = () => {
  return (
    <StaticPage className="p-home">
      <div className="navigation-bar">
        <button type="button" className="btn btn-outline-secondary">
          Methodology
        </button>
        <button type="button" className="btn btn-primary">
          Submit Project Info
        </button>
      </div>
      <h1>A Tree Planting Project Directory</h1>
    </StaticPage>
  );
};

export default HomePage;
