import { FC } from 'react';

import cx from 'classnames';

import { useProjects } from 'hooks/projects';
import { useAppSelector } from 'hooks/redux';

import Button from 'components/button';
import { filtersSelectors, searchSelectors, sortSelectors } from 'modules';

import { ResultsCountProps } from './types';

export const ResultsCount: FC<ResultsCountProps> = ({ onNavigateToCatalog, className }) => {
  const filters = useAppSelector(filtersSelectors.selectFilters);
  const search = useAppSelector(searchSelectors.selectSearch);
  const sort = useAppSelector(sortSelectors.selectSort);

  const { isLoading, isError, data } = useProjects(filters, search, sort, {
    keepPreviousData: true,
  });

  return (
    <div
      className={cx({
        'flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-14': true,
        [className]: !!className,
      })}
    >
      {(isLoading || isError) && <div />}
      {!isLoading && !isError && (
        <div className="flex flex-col items-stretch">
          {/* TODO: implement the dynamic sentence and progress bar */}
          <label htmlFor="results-progress" className="text-orange">
            46 projects (13%) out of 240 meet your filtering criteria
          </label>
          <progress
            id="results-progress"
            className="h-1 mt-3 rounded-full bg-orange/20 progress-bar:bg-orange/20 progress-value:bg-orange progress-value:rounded-full"
            max="100"
            value="13"
          >
            13%
          </progress>
        </div>
      )}
      <Button
        theme="secondary-orange"
        onClick={onNavigateToCatalog}
        className="items-center justify-center flex-shrink-0"
      >
        See Projects Results
      </Button>
    </div>
  );
};

export default ResultsCount;
