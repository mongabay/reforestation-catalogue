import React from 'react';
import classnames from 'classnames';

import { RadialChartProps } from './types';
import { Category } from 'types';

const RadialChart: React.FC<RadialChartProps> = ({
  highlightedCategory,
  categoriesPercentages,
  legendMode,
  updateSort,
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
          <text
            x="30"
            y="15"
            data-category={Category.Context}
            onClick={() => updateSort(Category.Context)}
            className={classnames({
              '-highlighted': highlightedCategory === Category.Context,
            })}
          >
            Context
          </text>
          <text
            x="18"
            y="28"
            data-category={Category.Ecological}
            onClick={() => updateSort(Category.Ecological)}
            className={classnames({
              '-highlighted': highlightedCategory === Category.Ecological,
            })}
          >
            Ecological
          </text>
          <text
            x="19"
            y="41"
            data-category={Category.Economic}
            onClick={() => updateSort(Category.Economic)}
            className={classnames({
              '-highlighted': highlightedCategory === Category.Economic,
            })}
          >
            Economic
          </text>
          <text
            x="42"
            y="54"
            data-category={Category.Social}
            onClick={() => updateSort(Category.Social)}
            className={classnames({
              '-highlighted': highlightedCategory === Category.Social,
            })}
          >
            Social
          </text>
          <text
            x="7"
            y="67"
            data-category={Category.Institutional}
            onClick={() => updateSort(Category.Institutional)}
            className={classnames({
              '-highlighted': highlightedCategory === Category.Institutional,
            })}
          >
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
        data-category={Category.Context}
      />

      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Ecological,
        })}
        cx="80"
        cy="80"
        r="65"
        strokeDasharray={getStrokeDashArray(65, Category.Ecological)}
        data-category={Category.Ecological}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Economic,
        })}
        cx="80"
        cy="80"
        r="52"
        strokeDasharray={getStrokeDashArray(52, Category.Economic)}
        data-category={Category.Economic}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Social,
        })}
        cx="80"
        cy="80"
        r="40"
        strokeDasharray={getStrokeDashArray(40, Category.Social)}
        data-category={Category.Social}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Category.Institutional,
        })}
        cx="80"
        cy="80"
        r="27"
        strokeDasharray={getStrokeDashArray(27, Category.Institutional)}
        data-category={Category.Institutional}
      />
    </svg>
  );
};

export default RadialChart;
