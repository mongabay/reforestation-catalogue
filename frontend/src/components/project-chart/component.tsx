import { FC } from 'react';

import cx from 'classnames';

import RadialChart from 'components/radial-chart';
import Tooltip from 'components/tooltip';
import { getProjectCategoriesPercentage } from 'utils/project';

import { ProjectChartProps } from './types';

export const ProjectChart: FC<ProjectChartProps> = ({
  project,
  highlightedCategory,
  highlightedCategoryStroke = 2,
  tooltip = true,
}: ProjectChartProps) => {
  const categoryPercentages = getProjectCategoriesPercentage(project);

  const isFinalized = project.end_year && project.end_year < new Date().getFullYear();

  return (
    <div className="max-w-[150px]">
      <Tooltip
        disabled={!tooltip}
        placement="bottom"
        interactive={false}
        content={
          <>
            {Object.keys(categoryPercentages).map((key) => (
              <div
                key={key}
                className={cx({
                  'flex items-center justify-between text-sm leading-7': true,
                  'font-semibold': key === highlightedCategory,
                })}
              >
                <span>{key}</span>
                <span className="ml-12">{Math.round(categoryPercentages[key])}</span>
              </div>
            ))}
          </>
        }
      >
        <div>
          <RadialChart
            highlightedCategory={highlightedCategory}
            highlightedCategoryStroke={highlightedCategoryStroke}
            categoriesPercentages={categoryPercentages}
            finalized={isFinalized}
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default ProjectChart;
