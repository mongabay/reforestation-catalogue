import React, { useMemo } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { AppProps } from 'next/app';
import Script from 'next/script';

import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';
import { AnimateSharedLayout } from 'framer-motion';

import StaticPageLayout from 'layouts/static-page';
import wrapper from 'lib/store';
import 'styles/globals.css';
import { LayoutStaticProp } from 'types';

type Props = AppProps & {
  Component: {
    layout?: LayoutStaticProp;
  };
};

const queryClient = new QueryClient();

const ReforestationCatalogApp: React.FC<AppProps> = ({ Component, pageProps }: Props) => {
  // By getting the layout from the child component, we can prevent it from re-rendering when
  // navigating to a page with the same one
  // Source: https://github.com/vercel/next.js/issues/8193#issuecomment-590654825
  // This is useful for the map page where opening a site means navigating to another page
  const Layout = useMemo(() => Component.layout?.Component ?? StaticPageLayout, [Component]);

  const layoutProps = useMemo(() => {
    let res = {};
    if (Component.layout?.props) {
      if (typeof Component.layout.props === 'function') {
        res = Component.layout.props(pageProps);
      } else {
        res = Component.layout.props;
      }
    }

    return res;
  }, [Component, pageProps]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Google Analytics G4 (back-up in case Tag Manager doesn't work) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T9GHWQF8VW" />
      <SSRProvider>
        <OverlayProvider>
          <AnimateSharedLayout>
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </AnimateSharedLayout>
        </OverlayProvider>
      </SSRProvider>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(ReforestationCatalogApp);
