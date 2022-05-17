import React, { useEffect } from 'react';

import classnames from 'classnames';

// services
import { MediaContextProvider, Mobile, Desktop } from 'utils/responsive';

import { getConfigData } from 'services/config';

// utils

// types
import { AboutPageLayoutProps } from './types';

const AboutPage: React.FC<AboutPageLayoutProps> = ({
  aboutPage,
  setConfig,
}: AboutPageLayoutProps) => {
  useEffect(() => {
    // ------ LOAD DATA ------------
    // ---- load config -------------
    getConfigData()
      .then((response) => setConfig(response.data))
      .catch((error) => console.error(error));
  }, []);

  const getMainContainer = (mobile) => (
    <div className={classnames({ 'main-container': true, '-desktop': !mobile, '-mobile': mobile })}>
      {!mobile && (
        <div className="left-container">
          <div className="radial-chart">
            <img src="/icons/radial-chart-white.svg" />
          </div>
        </div>
      )}

      <div
        className={classnames({ 'right-container': true, '-desktop': !mobile, '-mobile': mobile })}
      >
        <div className="content" dangerouslySetInnerHTML={{ __html: aboutPage.mainText }} />
        <div className="partners">
          <h2>Project Partners</h2>
          <div className={classnames({ logos: true, '-desktop': !mobile, '-mobile': mobile })}>
            <a href="https://mongabay.com" target="_blank" rel="noreferrer">
              <img src="/images/mongabay-logo-about.png" />
            </a>
            <a href="https://vizzuality.com" target="_blank" rel="noreferrer">
              <img src="/images/vizzuality.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const getTitle = (mobile) => (
    <div className={classnames({ title: true, '-desktop': !mobile, '-mobile': mobile })}>
      <h2>{`MONGABAY`}</h2>
      <h1>REFORESTATION DIRECTORY</h1>
    </div>
  );

  return (
    <div className="c-about-page-layout">
      <MediaContextProvider>
        <Mobile>
          {getTitle(true)}
          {getMainContainer(true)}
        </Mobile>
        <Desktop>
          {getTitle(false)}
          {getMainContainer(false)}
        </Desktop>
      </MediaContextProvider>
    </div>
  );
};

export default AboutPage;
