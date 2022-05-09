import React from 'react';

import classnames from 'classnames';

import { Categories } from 'types';

import { RadialChartProps } from './types';

const RadialChart: React.FC<RadialChartProps> = ({
  highlightedCategory,
  categoriesPercentages,
  legendMode,
  finalised,
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
        '-finalised': finalised,
      })}
    >
      {legendMode && (
        <>
          <text
            x="30"
            y="15"
            data-category={Categories.Context}
            onClick={() => updateSort(Categories.Context)}
            className={classnames({
              '-highlighted': highlightedCategory === Categories.Context,
            })}
          >
            Context
          </text>
          <text
            x="18"
            y="28"
            data-category={Categories.Ecological}
            onClick={() => updateSort(Categories.Ecological)}
            className={classnames({
              '-highlighted': highlightedCategory === Categories.Ecological,
            })}
          >
            Ecological
          </text>
          <text
            x="19"
            y="41"
            data-category={Categories.Economic}
            onClick={() => updateSort(Categories.Economic)}
            className={classnames({
              '-highlighted': highlightedCategory === Categories.Economic,
            })}
          >
            Economic
          </text>
          <text
            x="7"
            y="54"
            data-category={Categories.Institutional}
            onClick={() => updateSort(Categories.Institutional)}
            className={classnames({
              '-highlighted': highlightedCategory === Categories.Institutional,
            })}
          >
            Institutional
          </text>
          <text
            x="42"
            y="67"
            data-category={Categories.Social}
            onClick={() => updateSort(Categories.Social)}
            className={classnames({
              '-highlighted': highlightedCategory === Categories.Social,
            })}
          >
            Social
          </text>
        </>
      )}
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Categories.Context,
        })}
        cx="80"
        cy="80"
        r="77"
        strokeDasharray={getStrokeDashArray(77, Categories.Context)}
        data-category={Categories.Context}
      />

      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Categories.Ecological,
        })}
        cx="80"
        cy="80"
        r="65"
        strokeDasharray={getStrokeDashArray(65, Categories.Ecological)}
        data-category={Categories.Ecological}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Categories.Economic,
        })}
        cx="80"
        cy="80"
        r="52"
        strokeDasharray={getStrokeDashArray(52, Categories.Economic)}
        data-category={Categories.Economic}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Categories.Institutional,
        })}
        cx="80"
        cy="80"
        r="40"
        strokeDasharray={getStrokeDashArray(40, Categories.Institutional)}
        data-category={Categories.Institutional}
      />
      <circle
        className={classnames({
          '-highlighted': highlightedCategory === Categories.Social,
        })}
        cx="80"
        cy="80"
        r="27"
        strokeDasharray={getStrokeDashArray(27, Categories.Social)}
        data-category={Categories.Social}
      />
    </svg>
  );
};

export default RadialChart;
