import React from 'react';

import classnames from 'classnames';

import { Categories } from 'types';

import { RadialChartProps } from './types';

const RadialChart: React.FC<RadialChartProps> = ({
  highlightedCategory,
  categoriesPercentages,
  finalized,
  reducedContrast,
}: RadialChartProps) => {
  const getStrokeDashArray = (radius, category) => {
    const length = radius * 2 * Math.PI;
    const fullPercentage = categoriesPercentages[category];
    const fullValue = (fullPercentage * length) / 100;
    const emptyValue = length - fullValue;
    return `${fullValue} ${emptyValue}`;
  };

  const getCircleClassName = (category: Categories) =>
    classnames({
      'fill-transparent': true,
      'stroke-orange':
        !!highlightedCategory && highlightedCategory === category && !reducedContrast,
      'stroke-grey-medium':
        (!!highlightedCategory && highlightedCategory === category && reducedContrast) ||
        (!!highlightedCategory &&
          highlightedCategory !== category &&
          !finalized &&
          !reducedContrast) ||
        (!highlightedCategory && finalized && reducedContrast) ||
        (!highlightedCategory && !finalized),
      'stroke-grey-darker':
        (!!highlightedCategory &&
          highlightedCategory !== category &&
          finalized &&
          !reducedContrast) ||
        (!highlightedCategory && finalized && !reducedContrast),
      'stroke-grey':
        (!!highlightedCategory &&
          highlightedCategory !== category &&
          finalized &&
          reducedContrast) ||
        (!!highlightedCategory &&
          highlightedCategory !== category &&
          !finalized &&
          reducedContrast),
    });

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
          className={getCircleClassName(Categories.Context)}
          cx="80"
          cy="80"
          r="77"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(77, Categories.Context)}
        />

        <circle
          className={getCircleClassName(Categories.Ecological)}
          cx="80"
          cy="80"
          r="65"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(65, Categories.Ecological)}
        />
        <circle
          className={getCircleClassName(Categories.Economic)}
          cx="80"
          cy="80"
          r="52"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(52, Categories.Economic)}
        />
        <circle
          className={getCircleClassName(Categories.Institutional)}
          cx="80"
          cy="80"
          r="40"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={getStrokeDashArray(40, Categories.Institutional)}
        />
        <circle
          className={getCircleClassName(Categories.Social)}
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
