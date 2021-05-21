import React from 'react';
import classnames from 'classnames';

import { IconProps } from './types';

const Icon: React.FC<IconProps> = ({ name, className, style }: IconProps) => {
  const classNames = classnames({ [className]: className });
  return (
    <svg className={`c-icon ${classNames}`} style={style}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
