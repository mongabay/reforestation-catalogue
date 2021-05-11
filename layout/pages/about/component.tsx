import React, { useEffect } from 'react';

// services
import { getConfigData } from 'services/config';

import Header from 'layout/header';

import { AboutPageLayoutProps } from './types';

const AboutPage: React.FC<AboutPageLayoutProps> = ({
  aboutPage,
  setConfig,
}: AboutPageLayoutProps) => {
  useEffect(() => {
    // ------ LOAD DATA ------------
    // ---- load config -------------
    getConfigData()
      .then(response => setConfig(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="c-about-page-layout">
      <Header hideAboutButton={true} />
      <div className="title">
        <h2>{`MONGABAY`}</h2>
        <h1>REFORESTATION DIRECTORY</h1>
      </div>
      <div className="main-container">
        <div className="left-container">
          <div className="radial-chart">
            <img src="/icons/radial-chart-white.svg" />
          </div>
        </div>
        <div className="right-container">
          <div className="content" dangerouslySetInnerHTML={{ __html: aboutPage.mainText }} />
          <div className="partners">
            <h2>Project Partners</h2>
            <div className="logos">
              <a href="https://mongabay.com" target="_blank" rel="noreferrer">
                <img src="/images/mongabay-logo-about.png" />
              </a>
              <a href="https://vizzuality.com" target="_blank" rel="noreferrer">
                <img src="/images/vizzuality-logo.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
