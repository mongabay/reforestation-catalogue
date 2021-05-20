import React from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';

import { Mobile, MediaContextProvider, Desktop } from 'utils/responsive';

import { HeaderProps } from './types';

import Link from 'next/link';

const Header: React.FC<HeaderProps> = ({
  hideAboutButton,
  submitProjectInformationURL,
}: HeaderProps) => {
  const getButtons = mobile => (
    <>
      <div className="buttons">
        {!hideAboutButton && (
          <Link href="about">
            <a className="-secondary">About</a>
          </Link>
        )}
        <Link href="./#">
          <a
            className="-primary"
            href={submitProjectInformationURL}
            target="_blank"
            rel="noreferrer"
          >
            Submit Project Information
          </a>
        </Link>
      </div>
    </>
  );
  return (
    <motion.div className="c-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link href="/">
        <a>
          <img src="/images/logo-gecko.png" alt="Mongabay" className="logo" />
        </a>
      </Link>
      <MediaContextProvider>
        <Desktop>{getButtons(false)}</Desktop>
        <Mobile>{getButtons(true)}</Mobile>
      </MediaContextProvider>
    </motion.div>
  );
};

export default Header;
