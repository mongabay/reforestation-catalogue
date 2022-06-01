import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';

import LinkedInIcon from 'svgs/linked-in.svg';

import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = (props: FooterProps) => (
  <footer {...props} className="flex flex-col justify-end text-white bg-green">
    <LayoutContainer className="flex flex-col items-stretch justify-between gap-8 md:items-start md:gap-24 md:flex-row py-14">
      <Link href="/">
        <a className="flex-shrink-0 focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-white">
          <Image
            src="/images/mongabay-horizontal-white.png"
            width="205"
            height="30"
            alt="Mongabay"
            className="font-semibold text-white"
          />
        </a>
      </Link>
      <div className="flex justify-between flex-grow">
        <nav className="flex flex-col gap-2">
          <Link href="/">
            <a className="items-center text-xs font-bold leading-5 uppercase focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-white">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="flex items-center text-xs font-bold leading-5 uppercase focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-white">
              About
            </a>
          </Link>
          <Link href="/explore">
            <a className="flex items-center text-xs font-bold leading-5 uppercase focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-white">
              Explore
            </a>
          </Link>
          <Link href="mailto:editor@mongabay.com?subject=Reforestation.app feedback">
            <a className="flex items-center text-xs font-bold leading-5 uppercase focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-white">
              Contact
            </a>
          </Link>
        </nav>
        <div>
          <p className="text-sm font-bold">Follow us on:</p>
          <div className="flex gap-2 mt-3">
            <Link href="https://www.linkedin.com/company/mongabay/">
              <a title="LinkedIn" rel="noopener noreferrer" target="_blank">
                <Icon icon={LinkedInIcon} className="w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </LayoutContainer>
    <div className="py-2 text-sm bg-green-dark">
      <LayoutContainer>© Mongabay {new Date().getFullYear()}</LayoutContainer>
    </div>
  </footer>
);

export default Footer;
