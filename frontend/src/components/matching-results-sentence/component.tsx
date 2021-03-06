import { FC } from 'react';

import { useProjects } from 'hooks/projects';
import { useAppSelector } from 'hooks/redux';

import { filtersSelectors, searchSelectors, sortSelectors } from 'modules';

import { MatchingResultsSentenceProps } from './types';

export const MatchingResultsSentence: FC<MatchingResultsSentenceProps> = () => {
  const filters = useAppSelector(filtersSelectors.selectFilters);
  const search = useAppSelector(searchSelectors.selectSearch);
  const sort = useAppSelector(sortSelectors.selectSort);

  const { isLoading, isError, data } = useProjects(
    filters,
    search,
    sort,
    {},
    { keepPreviousData: true }
  );

  if (isError || isLoading) {
    return null;
  }

  const matching = data.pages?.[0]?.meta.projects_matching_query ?? 0;
  const total = data.pages?.[0]?.meta.projects_total;
  const percentage = total !== 0 ? Math.ceil((matching / total) * 100) : 0;

  if (filters.length === 0 && search.length === 0) {
    return <>{total} projects available to view in the catalog</>;
  }

  if (matching === 0) {
    return <>No projects meet your filtering criteria</>;
  }

  return (
    <>
      {matching} projects ({percentage}%) out of {total} meet your filtering criteria
    </>
  );
};

export default MatchingResultsSentence;
