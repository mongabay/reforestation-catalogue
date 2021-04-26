import React from 'react';

import { PillProps } from './types';

import './style.scss';

const Pill: React.FC<PillProps> = ({ filter, removeFilter }: PillProps) => {
  return (
    <div className="c-pill">
      {`${filter.propertyName}: ${filter.value}`}
      <button onClick={() => removeFilter(filter)}>x</button>
    </div>
  );
};

export default Pill;
