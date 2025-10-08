import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { debounce } from 'lodash-es';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import Input from 'components/forms/input';
import Select from 'components/forms/select';
import { searchActions, searchSelectors, sortActions, sortSelectors } from 'modules';
import { Categories } from 'types';

import { SORT_OPTIONS } from 'services/catalog';

import { ProjectSearchProps } from './types';

export const ProjectSearch: FC<ProjectSearchProps> = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');

  const storedSearch = useAppSelector(searchSelectors.selectSearch);
  const storedSort = useAppSelector(sortSelectors.selectSort);

  const onSearchDebounced = useMemo(
    () => debounce((search) => dispatch(searchActions.replaceSearch(search as string)), 1000),
    [dispatch]
  );

  const onSearch = useCallback(
    (search) => {
      setSearch(search as string);
      onSearchDebounced(search);
    },
    [setSearch, onSearchDebounced]
  );

  // Whevener the store's search value is modified, we update the component. This enables us to
  // restore the search from the URL.
  useEffect(() => {
    setSearch(storedSearch);
  }, [storedSearch]);

  return (
    <>
      <Input
        id="search"
        aria-label="Search"
        aria-describedby="search-description"
        type="search"
        placeholder="Search"
        className="placeholder:font-semibold placeholder-grey-darker pl-14 bg-[url('/images/magnifying-glass.svg')] bg-no-repeat bg-[left_22px_center]"
        value={search}
        onChange={onSearch}
      />
      <p id="search-description" className="mt-2 text-xs text-grey-medium">
        Search by <span className="font-semibold">Project name</span>,{' '}
        <span className="font-semibold">Lead organization</span>,{' '}
        <span className="font-semibold">Partner name</span>,{' '}
        <span className="font-semibold">Country</span>,{' '}
        <span className="font-semibold">Purpose</span>,{' '}
        <span className="font-semibold">Donor name</span>.
      </p>
      <div className="flex items-center mt-4 md:justify-end">
        <label htmlFor="sort" className="text-sm font-semibold underline">
          Sort by:
        </label>
        <div className="ml-2">
          <Select
            id="sort"
            options={SORT_OPTIONS}
            value={storedSort}
            onChange={({ value }) => dispatch(sortActions.updateSort(value as Categories))}
            className="px-0 font-semibold underline !border-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSearch;
