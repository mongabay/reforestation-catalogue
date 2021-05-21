import React from 'react';
import { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';
import { Provider } from 'react-redux';

import store from 'lib/store';

import 'css/index.scss';

const ReforestationCatalogueApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  </Provider>
);

export default ReforestationCatalogueApp;
