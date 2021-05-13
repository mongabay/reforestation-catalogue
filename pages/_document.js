import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=1024, initial-scale=1, shrink-to-fit=no" />
          <meta name="author" content="Vizzuality" />
          {/* Google Analytics G4 (back-up in case Tag Manager doesn't work) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9GHWQF8VW"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T9GHWQF8VW');`,
            }}
          ></script>

          {/* Google Tag Manager  */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l] = w[l] || []{'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K4R5ND4');`,
            }}
          ></script> */}
          {/* End Google Tag Manager */}
          <link rel="icon" type="image/png" href="/icons/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cardo&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body id="root">
          {/* Google Tag Manager (noscript)  */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K4R5ND4"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>`,
            }}
          ></noscript>
          {/* End Google Tag Manager (noscript)  */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
