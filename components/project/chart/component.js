import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classnames from 'classnames';

import Tooltip from 'components/tooltip';

import {
  SOCIAL_CATEGORY,
  ECONOMIC_CATEGORY,
  CONTEXT_CATEGORY,
  ECOLOGICAL_CATEGORY,
  INSTITUTIONAL_CATEGORY,
} from 'services/catalogue';

import { getProjectCategoriesPercentage } from 'utils/project';

import './style.scss';

function ProjectChart({ project, highlightedCategory }) {
  const [categoryPercentages, setCategoryPercentages] = useState({
    [CONTEXT_CATEGORY]: 0,
    [SOCIAL_CATEGORY]: 0,
    [ECONOMIC_CATEGORY]: 0,
    [ECOLOGICAL_CATEGORY]: 0,
    [INSTITUTIONAL_CATEGORY]: 0,
  });

  useEffect(() => {
    setCategoryPercentages(getProjectCategoriesPercentage(project));
  }, [project]);

  const getStrokeDashArray = (radius, category) => {
    const length = radius * 2 * 3.14159265359;
    const fullPercentage = categoryPercentages[category];
    const fullValue = (fullPercentage * length) / 100.0;
    const emptyValue = length - fullValue;
    return `${fullValue} ${emptyValue}`;
  };

  console.log('Object.keys(categoryPercentages)', Object.keys(categoryPercentages));

  return (
    <div className="c-project-chart">
      <Tooltip
        trigger="mouseenter"
        placement="top"
        interactive={false}
        appendTo={() => document.body}
        content={
          <div className="categories-tooltip">
            {Object.keys(categoryPercentages).map(cKey => (
              <div
                key={cKey}
                className="percentage-value"
                style={{
                  display: 'flex',
                  'justify-content': 'space-between',
                  'align-items': 'center',
                  'min-width': '100%',
                }}
              >
                <label>{cKey}:</label>
                <span style={{ margin: '0 0 0.25rem 1rem' }}>{categoryPercentages[cKey]}</span>
              </div>
            ))}
          </div>
        }
      >
        <svg height="160" width="160">
          <circle
            className={classnames({
              '-highlighted': highlightedCategory === CONTEXT_CATEGORY,
            })}
            cx="80"
            cy="80"
            r="77"
            strokeDasharray={getStrokeDashArray(77, CONTEXT_CATEGORY)}
            onMouseOver={evt => console.log('hey!', evt)}
          />

          <circle
            className={classnames({
              '-highlighted': highlightedCategory === ECOLOGICAL_CATEGORY,
            })}
            cx="80"
            cy="80"
            r="65"
            strokeDasharray={getStrokeDashArray(65, ECOLOGICAL_CATEGORY)}
          />
          <circle
            className={classnames({
              '-highlighted': highlightedCategory === ECONOMIC_CATEGORY,
            })}
            cx="80"
            cy="80"
            r="52"
            strokeDasharray={getStrokeDashArray(52, ECONOMIC_CATEGORY)}
          />
          <circle
            className={classnames({
              '-highlighted': highlightedCategory === SOCIAL_CATEGORY,
            })}
            cx="80"
            cy="80"
            r="40"
            strokeDasharray={getStrokeDashArray(40, SOCIAL_CATEGORY)}
          />
          <circle
            className={classnames({
              '-highlighted': highlightedCategory === INSTITUTIONAL_CATEGORY,
            })}
            cx="80"
            cy="80"
            r="27"
            strokeDasharray={getStrokeDashArray(27, INSTITUTIONAL_CATEGORY)}
          />
        </svg>
      </Tooltip>
      <Link href={`/project/${project['Project Number']}`}>
        <a className="title">{project['Project Name']}</a>
      </Link>
    </div>
  );
}

ProjectChart.propTypes = {
  project: PropTypes.object.isRequired,
  highlightedCategory: PropTypes.string,
};

export default ProjectChart;
