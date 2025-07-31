import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { debounce } from 'lodash-es';
import { searchActions, searchSelectors, sortActions, sortSelectors } from 'modules';
import { Categories } from 'types';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import Input from 'components/forms/input';
import Select from 'components/forms/select';

import { SORT_OPTIONS } from 'services/catalog';

import MagnifyingGlassIcon from 'svgs/magnifying-glass.svg';

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
    <div className="flex flex-col md:flex-row items-end gap-4 w-full">
      <div className="flex-grow">
        <Input
          id="search"
          aria-label="Search"
          type="search"
          placeholder="Search by name, country, purpose, ..."
          variant="primary"
          icon={MagnifyingGlassIcon}
          className="placeholder:font-semibold placeholder-green-light h-11"
          value={search}
          onChange={onSearch}
        />
      </div>
      <div className="flex items-center mt-4 md:justify-end">
        <label htmlFor="sort" className="sr-only">
          Sort by:
        </label>
        <div className="ml-2">
          <Select
            id="sort"
            options={SORT_OPTIONS}
            value={storedSort}
            customLabel={(option) => `Sorted by ${option.label}`}
            onChange={({ value }) => dispatch(sortActions.updateSort(value as Categories))}
            variant="primary"
            className="px-0 h-11"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSearch;
