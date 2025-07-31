import 'styles/globals.css';

import React, { useMemo, useState } from 'react';

const rowan = localFont({
  src: [
    { path: '../../public/fonts/Rowan-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Rowan-Bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Rowan-Semibold.otf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Rowan-Light.otf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Rowan-Medium.otf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Rowan-Italic.otf', weight: '400', style: 'italic' },
  ],
  variable: '--font-rowan',
  display: 'swap',
});

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Script from 'next/script';

import { OverlayProvider } from '@react-aria/overlays';
import StaticPageLayout from 'layouts/static-page';
import { StaticPageLayoutProps } from 'layouts/static-page/types';
import wrapper from 'lib/store';
import { LayoutStaticProp } from 'types';

type Props = AppProps & {
  Component: {
    layout?: LayoutStaticProp;
  };
};

const ReforestationCatalogApp: React.FC<AppProps> = ({ Component, pageProps }: Props) => {
  const [queryClient] = useState(() => new QueryClient());

  // By getting the layout from the child component, we can prevent it from re-rendering when
  // navigating to a page with the same one
  // Source: https://github.com/vercel/next.js/issues/8193#issuecomment-590654825
  // This is useful for the map page where opening a site means navigating to another page
  const Layout = useMemo(() => Component.layout?.Component ?? StaticPageLayout, [Component]);

  const layoutProps: StaticPageLayoutProps = useMemo(() => {
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
      <Hydrate state={pageProps.dehydratedState}>
        {/* Google Analytics G4 (back-up in case Tag Manager doesn't work) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T9GHWQF8VW" />

        <OverlayProvider>
          <div className={`${rowan.className} font-sans`}>
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </div>
        </OverlayProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(ReforestationCatalogApp);
