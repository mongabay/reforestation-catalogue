import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { getFieldByID } from 'services/catalogue';

import { PillProps } from './types';

const Pill: React.FC<PillProps> = ({ filter, removeFilter, linkMode }: PillProps) => {
  const filterValue = getFieldByID(filter.propertyName);
  const getText = () => (
    <div className="text">{`${filter.label}${!linkMode ? `: ${filter.value}` : ''}`}</div>
  );
  return (
    <motion.div className="c-pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {linkMode && (
        <Link
          href={`/?filters=${encodeURI(
            JSON.stringify([
              { ...filterValue, value: filter.value, propertyName: filter.propertyName },
            ])
          )}`}
        >
          <a>{getText()}</a>
        </Link>
      )}
      {!linkMode && (
        <>
          {getText()}
          <button type="button" onClick={() => removeFilter(filter)}>
            <span className="sr-only">Remove</span>
            <Image src="/icons/cross.svg" width="10" height="10" alt="Cross" aria-hidden />
          </button>
        </>
      )}
    </motion.div>
  );
};

export default Pill;
