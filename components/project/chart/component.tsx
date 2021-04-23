import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import Tooltip from 'components/tooltip';

import { Category } from 'types';

import { getProjectCategoriesPercentage } from 'utils/project';

import { ProjectChartProps } from './types';

// constants
import { TITLE_MAX_LENGTH } from './constants';

import './style.scss';

export const ProjectChart: React.FC<ProjectChartProps> = (props: ProjectChartProps) => {
  const { project, highlightedCategory } = props;
  const [categoryPercentages, setCategoryPercentages] = useState({
    [Category.Context]: 0,
    [Category.Social]: 0,
    [Category.Economic]: 0,
    [Category.Ecological]: 0,
    [Category.Institutional]: 0,
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
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minWidth: '100%',
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
      </Tooltip>
      <Link href={`/project/${project.projectNumber}`}>
        <a className="title">
          {project.projectName.length < TITLE_MAX_LENGTH
            ? project.projectName
            : `${project.projectName.substr(0, TITLE_MAX_LENGTH)}...`}
        </a>
      </Link>
    </div>
  );
};

export default ProjectChart;
