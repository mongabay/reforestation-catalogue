import React from 'react';

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
      <img className="info-icon" src="icons/info.svg" />
    </Tooltip>
  );
};

export default CategoryInfoTooltip;
