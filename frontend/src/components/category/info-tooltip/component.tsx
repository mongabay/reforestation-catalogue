import React from 'react';

import Image from 'next/image';

import Tooltip from 'components/tooltip';

import { CategoryInfoTooltipProps } from './types';

const CategoryInfoTooltip: React.FC<CategoryInfoTooltipProps> = ({
  text,
}: CategoryInfoTooltipProps) => {
  return (
    <Tooltip
      className="c-category-info-tooltip"
      trigger="mouseenter"
      placement="top"
      interactive={false}
      appendTo={() => document.body}
      content={<div className="info-tooltip">{text}</div>}
    >
      <Image className="info-icon" src="/icons/info.svg" width="12" height="12" alt="Info" />
    </Tooltip>
  );
};

export default CategoryInfoTooltip;
