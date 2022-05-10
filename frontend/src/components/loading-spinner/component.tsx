import { FC } from 'react';

import cx from 'classnames';

import { LoadingSpinnerProps } from './types';

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  transparent = false,
  inner = false,
  inline = false,
  mini = false,
}: LoadingSpinnerProps) => (
  <div
    className={cx({
      'top-0 left-0 z-10': true,
      fixed: !inner && !inline,
      'bg-white/40': !transparent,
      'w-full h-full': !inline && !mini,
      'bg-transparent': transparent,
      absolute: inner,
      'relative inline-block w-16 h-16 align-text-top': inline,
      'w-5 h-5': mini,
    })}
  >
    <svg
      className={cx({
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/26': true,
        'w-16 h-16': !mini,
        'w-5 h-5': mini,
      })}
    >
      <g className="origin-center animate-spin">
        <circle
          cx={mini ? 10 : 32}
          cy={mini ? 10 : 32}
          r={mini ? 5 : 20}
          fill="none"
          strokeWidth={mini ? 2 : 3}
          strokeMiterlimit="10"
          strokeDasharray="100, 200"
          strokeDashoffset="0"
          strokeLinecap="round"
          className="stroke-green"
        />
      </g>
    </svg>
  </div>
);

export default LoadingSpinner;
