import React from 'react';

import cx from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import ActiveLink from 'components/active-link';
import Button from 'components/button';
import LayoutContainer from 'components/layout-container';

import MobileMenu from './mobile-menu';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <header {...props} className={cx('bg-green text-white/60', props.className)}>
    <LayoutContainer className="flex items-center justify-between py-2 sm:py-0">
      <Link href="/">
        <a className="flex flex-shrink-0 focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-white">
          <span className="flex md:hidden">
            <Image
              src="/images/mongabay-horizontal-small-white.png"
              width="33"
              height="30"
              alt="Mongabay"
              className="font-semibold text-white "
            />
          </span>
          <span className="hidden md:flex">
            <Image
              src="/images/mongabay-horizontal-white.png"
              width="205"
              height="30"
              alt="Mongabay"
              className="font-semibold text-white "
            />
          </span>
        </a>
      </Link>
      <MobileMenu />
      <nav className="hidden sm:flex sm:items-stretch">
        <ActiveLink href="/" activeClassName="text-white !border-b-white">
          <a className="flex items-center px-2 text-sm font-semibold transition border-b-4 outline-none sm:px-5 border-b-transparent focus:border-b-white/40">
            Home
          </a>
        </ActiveLink>
        <ActiveLink href="/about" activeClassName="text-white !border-b-white">
          <a className="flex items-center px-2 text-sm font-semibold transition border-b-4 outline-none sm:px-5 border-b-transparent focus:border-b-white/40">
            About
          </a>
        </ActiveLink>
        <ActiveLink href="/explore" activeClassName="text-white !border-b-white">
          <a className="flex items-center px-2 text-sm font-semibold transition border-b-4 outline-none sm:px-5 border-b-transparent focus:border-b-white/40">
            Explore
          </a>
        </ActiveLink>
        <div className="flex items-center flex-shrink-0 py-2 ml-2 sm:py-4 sm:ml-5">
          <Button to="/explore/project/new" theme="primary-white">
            <span className="inline">Submit Project</span>
          </Button>
        </div>
      </nav>
    </LayoutContainer>
  </header>
);

export default Header;
