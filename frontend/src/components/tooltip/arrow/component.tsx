import { FC } from 'react';

import cx from 'classnames';

import type { ArrowProps } from './types';

export const Arrow: FC<ArrowProps> = (props: ArrowProps) => {
  const { 'data-placement': placement } = props;

  return (
    <div
      {...props}
      className={cx({
        '-bottom-2': placement && placement.includes('top'),
        '-top-2': placement && placement.includes('bottom'),
        '-right-2': placement && placement.includes('left'),
        '-left-2': placement && placement.includes('right'),
      })}
    >
      <div className="w-4 h-4 transform rotate-45 bg-white" />
    </div>
  );
};

export default Arrow;
