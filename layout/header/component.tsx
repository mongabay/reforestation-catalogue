import React from 'react';
import { motion } from 'framer-motion';

import { HeaderProps } from './types';

import './style.scss';
import Link from 'next/link';

const Header: React.FC<HeaderProps> = () => (
  <motion.div className="c-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <img src="/images/logo-gecko.png" alt="Mongabay" className="logo" />
    <div className="buttons">
      <Link href="about">
        <a className="-secondary">About</a>
      </Link>
      <Link href="./#">
        <a className="-primary">Submit Project Information</a>
      </Link>
    </div>
  </motion.div>
);

export default Header;
