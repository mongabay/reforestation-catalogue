import React from 'react';
import classnames from 'classnames';

import { RadialChartProps } from './types';
import { Category } from 'types';

const RadialChart: React.FC<RadialChartProps> = ({
  highlightedCategory,
  categoriesPercentages,
}: RadialChartProps) => {
  const getStrokeDashArray = (radius, category) => {
    const length = radius * 2 * 3.14159265359;
    const fullPercentage = categoriesPercentages[category];
    const fullValue = (fullPercentage * length) / 100.0;
    const emptyValue = length - fullValue;
    return `${fullValue} ${emptyValue}`;
  };

  return (
    <svg height="160" width="160">
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Context,
        })}
        cx="80"
        cy="80"
        r="77"
        strokeDasharray={getStrokeDashArray(77, Category.Context)}
      />

      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Ecological,
        })}
        cx="80"
        cy="80"
        r="65"
        strokeDasharray={getStrokeDashArray(65, Category.Ecological)}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Economic,
        })}
        cx="80"
        cy="80"
        r="52"
        strokeDasharray={getStrokeDashArray(52, Category.Economic)}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Social,
        })}
        cx="80"
        cy="80"
        r="40"
        strokeDasharray={getStrokeDashArray(40, Category.Social)}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Institutional,
        })}
        cx="80"
        cy="80"
        r="27"
        strokeDasharray={getStrokeDashArray(27, Category.Institutional)}
      />
    </svg>
  );
};

export default RadialChart;
