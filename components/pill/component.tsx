import React from 'react';
import { motion } from 'framer-motion';

import { getFieldByID } from 'services/catalogue';

import { PillProps } from './types';

import Link from 'next/link';

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
          <button onClick={() => removeFilter(filter)}>
            <img src="/icons/cross.svg" />
          </button>
        </>
      )}
    </motion.div>
  );
};

export default Pill;
