import { FC, useCallback } from 'react';

import cx from 'classnames';

import { useProjects } from 'hooks/projects';
import { useAppSelector } from 'hooks/redux';

import Button from 'components/button';
import MatchingResultsSentence from 'components/matching-results-sentence';
import { filtersSelectors, searchSelectors, sortSelectors } from 'modules';
import { logEvent } from 'utils/analytics';

import { ResultsCountProps } from './types';

export const ResultsCount: FC<ResultsCountProps> = ({ onNavigateToCatalog, className }) => {
  const filters = useAppSelector(filtersSelectors.selectFilters);
  const search = useAppSelector(searchSelectors.selectSearch);
  const sort = useAppSelector(sortSelectors.selectSort);

  const { isLoading, isError, data } = useProjects(
    filters,
    search,
    sort,
    {},
    {
      keepPreviousData: true,
    }
  );

  const matching = data?.pages?.[0]?.meta.projects_matching_query ?? 0;
  const total = data?.pages?.[0]?.meta.projects_total ?? 0;
  const percentage = total !== 0 ? Math.ceil((matching / total) * 100) : 0;

  const onClickCatalog = useCallback(() => {
    logEvent('Exit guidance');
    onNavigateToCatalog();
  }, [onNavigateToCatalog]);

  return (
    <div
      className={cx({
        'flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-14 xl:gap-24': true,
        [className]: !!className,
      })}
    >
      {(isLoading || isError) && <div />}
      {!isLoading && !isError && (
        <div className="flex flex-col items-stretch flex-grow">
          <label htmlFor="results-progress" className="text-orange">
            <MatchingResultsSentence />
          </label>
          <progress
            id="results-progress"
            className="h-1 mt-3 rounded-full bg-orange/20 progress-bar:bg-orange/20 progress-value:bg-orange progress-value:rounded-full"
            max={total}
            value={matching}
          >
            {percentage}%
          </progress>
        </div>
      )}
      <Button
        theme="secondary-orange"
        onClick={onClickCatalog}
        className="items-center justify-center flex-shrink-0 min-w-[185px]"
      >
        {(filters.length === 0 && search.length === 0) || matching === 0
          ? 'Go to Project Catalog'
          : 'See Projects Results'}
      </Button>
    </div>
  );
};

export default ResultsCount;
