import React from 'react';

import cx from 'classnames';

import Image from 'next/image';

import Tooltip from 'components/tooltip';

import { InfoTooltipProps } from './types';

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ text, className }: InfoTooltipProps) => {
  return (
    <Tooltip content={text} className="max-w-full md:max-w-xs">
      <button
        type="button"
        className={cx(
          'inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-full',
          className
        )}
      >
        <Image className="info-icon" src="/icons/info.svg" width="16" height="16" alt="Info" />
      </button>
    </Tooltip>
  );
};

export default InfoTooltip;
