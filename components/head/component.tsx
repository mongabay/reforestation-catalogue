import React from 'react';
import Head from 'next/head';
import { HeadProps } from './types';

const HeadComponent: React.FC<HeadProps> = ({
  meta: { title, description, thumbnailURL },
}: HeadProps) => (
  <Head>
    <title key="title">{title}</title>
    <meta key="description" name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={thumbnailURL} />
  </Head>
);
export default HeadComponent;
