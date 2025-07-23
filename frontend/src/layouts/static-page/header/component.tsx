import React, { useState } from 'react';

import cx from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import ActiveLink from 'components/active-link';
import Button from 'components/button';
import LayoutContainer from 'components/layout-container';

import MobileMenu from './mobile-menu';
import { HeaderProps } from './types';

const LINK_CLASSNAMES = {
  active: 'text-primary !border-t-primary',
  default:
    'flex items-center px-2 font-semibold transition border-offset-4 border-t-[12px] pt-[35px] transform -translate-y-6 outline-none sm:px-5 border-t-transparent',
};

interface HeaderWithNewsletterProps extends HeaderProps {
  onOpenNewsletterSignup?: () => void;
}

const Header: React.FC<HeaderWithNewsletterProps> = (props) => {
  const { onOpenNewsletterSignup, ...rest } = props;

  return (
    <header {...rest} className={cx('text-white', props.className)}>
      <LayoutContainer className="flex items-center justify-between py-2 sm:py-[21px]">
        <Link
          href="/"
          className="flex flex-shrink-0 focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-white"
        >
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
        </Link>
        <MobileMenu onClickSubscribe={onOpenNewsletterSignup} />
        <nav className="hidden sm:flex sm:items-stretch" aria-label="Main navigation">
          <ul className="flex items-stretch m-0 p-0 list-none">
            <li>
              <ActiveLink
                href="/"
                activeClassName={LINK_CLASSNAMES.active}
                className={LINK_CLASSNAMES.default}
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/about"
                activeClassName={LINK_CLASSNAMES.active}
                className={LINK_CLASSNAMES.default}
              >
                About
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/explore"
                activeClassName={LINK_CLASSNAMES.active}
                className={LINK_CLASSNAMES.default}
              >
                Explore
              </ActiveLink>
            </li>
            <li className="flex items-center flex-shrink-0 py-2 sm:py-4">
              <Button
                to="/explore/project/new"
                theme="naked"
                className="justify-center min-w-[142px]"
              >
                <span className="inline">Submit Project</span>
              </Button>
            </li>
            <li className="flex items-center flex-shrink-0 py-2 ml-2 sm:py-4 sm:ml-5 2xl:ml-10">
              <Button
                theme="primary-accent"
                className="justify-center min-w-[142px]"
                onClick={onOpenNewsletterSignup}
              >
                <span className="inline">Subscribe</span>
              </Button>
            </li>
          </ul>
        </nav>
      </LayoutContainer>
    </header>
  );
};

export default Header;
