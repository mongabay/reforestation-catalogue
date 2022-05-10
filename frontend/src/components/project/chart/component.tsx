import React, { useEffect, useState } from 'react';

import classnames from 'classnames';

import Link from 'next/link';

import RadialChart from 'components/radial-chart';
import Tooltip from 'components/tooltip';
import { Categories, END_YEAR_SPECIAL_VALUES } from 'types';
import { getProjectCategoriesPercentage } from 'utils/project';

import { TITLE_MAX_LENGTH } from './constants';
import { ProjectChartProps } from './types';

// constants

export const ProjectChart: React.FC<ProjectChartProps> = (props: ProjectChartProps) => {
  const { project, highlightedCategory, cardMode } = props;
  const [categoryPercentages, setCategoryPercentages] = useState({
    [Categories.Context]: 0,
    [Categories.Ecological]: 0,
    [Categories.Economic]: 0,
    [Categories.Social]: 0,
    [Categories.Institutional]: 0,
  });

  useEffect(() => {
    setCategoryPercentages(getProjectCategoriesPercentage(project));
  }, [project]);

  const currentYear = new Date().getFullYear();
  const projectIsFinalised =
    project.endYear &&
    project.endYear !== END_YEAR_SPECIAL_VALUES.ONGOING &&
    project.endYear < currentYear;

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
                {Object.keys(categoryPercentages).map((cKey) => (
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
                legendMode={false}
                finalised={projectIsFinalised}
              />
            </div>
          </Tooltip>
          <div className="title">
            {project.projectName.length < TITLE_MAX_LENGTH
              ? project.projectName
              : `${project.projectName.substr(0, TITLE_MAX_LENGTH)}...`}
          </div>
        </>
      )}
      {!cardMode && (
        <RadialChart
          highlightedCategory={highlightedCategory}
          categoriesPercentages={categoryPercentages}
          legendMode={false}
          finalised={projectIsFinalised}
        />
      )}
    </div>
  );
};

export default ProjectChart;