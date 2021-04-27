import React from 'react';
import { motion } from 'framer-motion';

import { PillProps } from './types';

import './style.scss';

const Pill: React.FC<PillProps> = ({ filter, removeFilter }: PillProps) => {
  return (
    <motion.div className="c-pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="text">{`${filter.label}: ${filter.value}`}</div>
      <button onClick={() => removeFilter(filter)}>
        <img src="/icons/cross.svg" />
      </button>
    </motion.div>
  );
};

export default Pill;
