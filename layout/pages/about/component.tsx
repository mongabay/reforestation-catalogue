import React, { useEffect } from 'react';
import classnames from 'classnames';

// services
import { getConfigData } from 'services/config';

// layout
import Header from 'layout/header';

// utils
import { MediaContextProvider, Mobile, Desktop } from 'utils/responsive';

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
      .then(response => setConfig(response.data))
      .catch(error => console.error(error));
  }, []);

  const getMainContainer = mobile => (
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
              <img src="/images/vizzuality-logo.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const getTitle = mobile => (
    <div className={classnames({ title: true, '-desktop': !mobile, '-mobile': mobile })}>
      <h2>{`MONGABAY`}</h2>
      <h1>REFORESTATION DIRECTORY</h1>
    </div>
  );

  return (
    <div className="c-about-page-layout">
      <Header hideAboutButton={true} />
      <MediaContextProvider>
        <Mobile>
          {getTitle(true)}
          {getMainContainer(true)}
        </Mobile>
        <Desktop>
          {getTitle(false)}
          {getMainContainer(true)}
        </Desktop>
      </MediaContextProvider>
    </div>
  );
};

export default AboutPage;
