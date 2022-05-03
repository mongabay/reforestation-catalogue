import React from 'react';

import NextHead from 'next/head';

import { HeadProps } from './types';

export const Head: React.FC<HeadProps> = ({
  title: customTitle,
  description: customDescription,
  children,
}: HeadProps) => {
  const title = customTitle
    ? `${customTitle} | Mongabay Reforestation Catalog`
    : 'Mongabay Reforestation Catalog';
  const description =
    customDescription ??
    'Welcome to Mongabay’s directory of reforestation and tree-planting projects.';

  return (
    <NextHead>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://reforestation.app/images/mongabay-meta-image.png"
      />
      {children}
    </NextHead>
  );
};

export default Head;
