import React, { FC, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ActiveLink from 'components/active-link';
import Button from 'components/button';
import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';

import LinkedInIcon from 'svgs/linked-in.svg';

import { FooterProps } from './types';

const LINK_CLASSNAMES = {
  active: '',
  default:
    'flex items-center px-2 font-semibold transition border-offset-4 border-t-[12px] pt-[35px] transform -translate-y-6 outline-none sm:px-5 border-t-transparent focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-dark',
};

interface FooterWithNewsletterProps extends FooterProps {
  onOpenNewsletterSignup?: () => void;
}

const Footer: FC<FooterWithNewsletterProps> = (props) => {
  const { onOpenNewsletterSignup, ...rest } = props;
  return (
    <footer {...rest} className="flex flex-col justify-end text-green-dark bg-primary font-sans">
      <LayoutContainer className="flex flex-col items-stretch justify-between gap-8 md:items-start md:gap-24 md:flex-row py-14">
        <Link
          href="/"
          className="flex-shrink-0 focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:green-dark self-center"
        >
          <Image
            src="/images/full-mongabay.png"
            width="260"
            height="45"
            alt="Mongabay"
            className="font-semibold text-green-dark"
          />
        </Link>
        <nav className="sm:flex sm:items-stretch" aria-label="Footer navigation">
          <ul className="flex items-stretch m-0 p-0 list-none">
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
                theme="primary-green"
                className="justify-center min-w-[142px]"
                onClick={onOpenNewsletterSignup}
              >
                <span className="inline">Subscribe</span>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-end justify-center gap-4">
            <p className="text-sm uppercase">Follow us on:</p>
            <div className="flex gap-2 mt-3">
              <Link
                href="https://www.linkedin.com/company/mongabay/"
                title="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
                className="focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-green-dark"
              >
                <Icon icon={LinkedInIcon} className="w-6 h-6 svg:fill-green-dark" />
              </Link>
            </div>
          </div>
          <LayoutContainer className="text-sm font-semibold font-sans">
            © Mongabay {new Date().getFullYear()}
          </LayoutContainer>
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
