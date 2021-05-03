import React from 'react';
import classnames from 'classnames';

import { RadialChartProps } from './types';
import { Category } from 'types';

const RadialChart: React.FC<RadialChartProps> = ({
  highlightedCategory,
  categoriesPercentages,
  legendMode,
}: RadialChartProps) => {
  const getStrokeDashArray = (radius, category) => {
    const length = radius * 2 * 3.14159265359;
    const fullPercentage = categoriesPercentages[category];
    const fullValue = (fullPercentage * length) / 100.0;
    const emptyValue = length - fullValue;
    return `${fullValue} ${emptyValue}`;
  };

  return (
    <svg
      height="170"
      width="170"
      className={classnames({
        'c-radial-chart': true,
        '-legend': legendMode,
      })}
    >
      {legendMode && (
        <>
          <text x="30" y="15">
            Context
          </text>
          <text x="18" y="28">
            Ecological
          </text>
          <text x="19" y="41">
            Economic
          </text>
          <text x="42" y="54">
            Social
          </text>
          <text x="7" y="67">
            Institutional
          </text>
        </>
      )}
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
