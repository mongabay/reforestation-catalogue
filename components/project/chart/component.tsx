import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import Tooltip from 'components/tooltip';
import RadialChart from 'components/radial-chart';

import { Category } from 'types';

import { getProjectCategoriesPercentage } from 'utils/project';

import { ProjectChartProps } from './types';

// constants
import { TITLE_MAX_LENGTH } from './constants';

export const ProjectChart: React.FC<ProjectChartProps> = (props: ProjectChartProps) => {
  const { project, highlightedCategory, cardMode } = props;
  const [categoryPercentages, setCategoryPercentages] = useState({
    [Category.Context]: 0,
    [Category.Ecological]: 0,
    [Category.Economic]: 0,
    [Category.Social]: 0,
    [Category.Institutional]: 0,
  });

  useEffect(() => {
    setCategoryPercentages(getProjectCategoriesPercentage(project));
  }, [project]);

  return (
    <div
      className={classnames({
        'c-project-chart': true,
        '-hover-animated': cardMode,
      })}
    >
      {cardMode && (
        <>
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
                    <label>{cKey === highlightedCategory ? <b>{cKey}</b> : cKey}:</label>
                    <span style={{ margin: '0 0 0.25rem 1rem' }}>
                      {Math.round(categoryPercentages[cKey])}
                    </span>
                  </div>
                ))}
              </div>
            }
          >
            <div>
              <RadialChart
                highlightedCategory={highlightedCategory}
                categoriesPercentages={categoryPercentages}
              />
            </div>
          </Tooltip>
          <Link href={`/project?id=${project.projectNumber}`}>
            <a className="title">
              {project.projectName.length < TITLE_MAX_LENGTH
                ? project.projectName
                : `${project.projectName.substr(0, TITLE_MAX_LENGTH)}...`}
            </a>
          </Link>
        </>
      )}
      {!cardMode && (
        <RadialChart
          highlightedCategory={highlightedCategory}
          categoriesPercentages={categoryPercentages}
        />
      )}
    </div>
  );
};

export default ProjectChart;
