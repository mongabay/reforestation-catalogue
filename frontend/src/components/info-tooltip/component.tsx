import React from 'react';

import cx from 'classnames';

import Icon from 'components/icon';
import Tooltip from 'components/tooltip';

import InfoIcon from 'svgs/info.svg';

import { InfoTooltipProps } from './types';

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  text,
  className,
  iconClassName = 'w-4 h-4',
}: InfoTooltipProps) => {
  return (
    <Tooltip content={text} className="max-w-full md:max-w-xs">
      <button
        type="button"
        className={cx(
          'inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-full',
          className
        )}
      >
        <span className="sr-only">Info</span>
        <Icon icon={InfoIcon} className={iconClassName} />
      </button>
    </Tooltip>
  );
};

export default InfoTooltip;
