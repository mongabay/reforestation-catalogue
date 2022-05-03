import React from 'react';

import LayoutContainer from 'components/layout-container';

import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = (props: FooterProps) => (
  <footer {...props} className="flex flex-col justify-end h-64 text-white bg-green">
    <div className="py-2 text-sm bg-green-dark">
      <LayoutContainer>© Mongabay {new Date().getFullYear()}</LayoutContainer>
    </div>
  </footer>
);

export default Footer;
