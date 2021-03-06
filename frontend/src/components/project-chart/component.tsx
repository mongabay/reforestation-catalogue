import { FC } from 'react';

import cx from 'classnames';

import RadialChart from 'components/radial-chart';
import Tooltip from 'components/tooltip';
import { Categories } from 'types';

import { ProjectChartProps } from './types';

export const ProjectChart: FC<ProjectChartProps> = ({
  project,
  highlightedCategory,
  highlightedCategoryStroke = 2,
  tooltip = true,
}: ProjectChartProps) => {
  const isFinalized =
    project.end_year !== null &&
    project.end_year !== undefined &&
    project.end_year !== 0 &&
    project.end_year < new Date().getFullYear();

  return (
    <div className="max-w-[150px] aspect-square w-full">
      <Tooltip
        disabled={!tooltip}
        placement="bottom"
        interactive={false}
        content={
          <>
            {Object.entries(Categories).map(([key, value]) => (
              <div
                key={key}
                className={cx({
                  'flex items-center justify-between text-sm leading-7': true,
                  'font-semibold': value === highlightedCategory,
                })}
              >
                <span>{key}</span>
                <span className="ml-12">{Math.ceil(project.percentages[value])}</span>
              </div>
            ))}
          </>
        }
      >
        <div>
          <RadialChart
            highlightedCategory={highlightedCategory}
            highlightedCategoryStroke={highlightedCategoryStroke}
            categoriesPercentages={project.percentages}
            finalized={isFinalized}
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default ProjectChart;
