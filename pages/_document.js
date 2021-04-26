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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
