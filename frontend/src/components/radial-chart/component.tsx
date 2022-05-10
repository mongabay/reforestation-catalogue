import React from 'react';

import classnames from 'classnames';

import { Categories } from 'types';

import { RadialChartProps } from './types';

const RadialChart: React.FC<RadialChartProps> = ({
  highlightedCategory,
  categoriesPercentages,
  finalized,
}: RadialChartProps) => {
  const getStrokeDashArray = (radius, category) => {
    const length = radius * 2 * Math.PI;
    const fullPercentage = categoriesPercentages[category];
    const fullValue = (fullPercentage * length) / 100;
    const emptyValue = length - fullValue;
    return `${fullValue} ${emptyValue}`;
  };

  return (
    <svg viewBox="0 0 160 160">
      <g>
        <circle className="fill-transparent stroke-grey" cx="80" cy="80" r="77" strokeWidth="1" />
        <circle className="fill-transparent stroke-grey" cx="80" cy="80" r="65" strokeWidth="1" />
        <circle className="fill-transparent stroke-grey" cx="80" cy="80" r="52" strokeWidth="1" />
        <circle className="fill-transparent stroke-grey" cx="80" cy="80" r="40" strokeWidth="1" />
        <circle className="fill-transparent stroke-grey" cx="80" cy="80" r="27" strokeWidth="1" />
      </g>
      <g className="origin-center -rotate-90">
        <circle
          className={classnames({
            'fill-transparent': true,
            'stroke-orange': highlightedCategory === Categories.Context,
            'stroke-grey-darker': highlightedCategory !== Categories.Context && finalized,
            'stroke-grey-medium': highlightedCategory !== Categories.Context && !finalized,
          })}
          cx="80"
          cy="80"
          r="77"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(77, Categories.Context)}
        />

        <circle
          className={classnames({
            'fill-transparent': true,
            'stroke-orange': highlightedCategory === Categories.Ecological,
            'stroke-grey-darker': highlightedCategory !== Categories.Ecological && finalized,
            'stroke-grey-medium': highlightedCategory !== Categories.Ecological && !finalized,
          })}
          cx="80"
          cy="80"
          r="65"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(65, Categories.Ecological)}
        />
        <circle
          className={classnames({
            'fill-transparent': true,
            'stroke-orange': highlightedCategory === Categories.Economic,
            'stroke-grey-darker': highlightedCategory !== Categories.Economic && finalized,
            'stroke-grey-medium': highlightedCategory !== Categories.Economic && !finalized,
          })}
          cx="80"
          cy="80"
          r="52"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(52, Categories.Economic)}
        />
        <circle
          className={classnames({
            'fill-transparent': true,
            'stroke-orange': highlightedCategory === Categories.Institutional,
            'stroke-grey-darker': highlightedCategory !== Categories.Institutional && finalized,
            'stroke-grey-medium': highlightedCategory !== Categories.Institutional && !finalized,
          })}
          cx="80"
          cy="80"
          r="40"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(40, Categories.Institutional)}
        />
        <circle
          className={classnames({
            'fill-transparent': true,
            'stroke-orange': highlightedCategory === Categories.Social,
            'stroke-grey-darker': highlightedCategory !== Categories.Social && finalized,
            'stroke-grey-medium': highlightedCategory !== Categories.Social && !finalized,
          })}
          cx="80"
          cy="80"
          r="27"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(27, Categories.Social)}
        />
      </g>
    </svg>
  );
};

export default RadialChart;
