import { FC, useMemo } from 'react';

import { useEnums } from 'hooks/enums';
import { useAppDispatch } from 'hooks/redux';

import Select from 'components/forms/select';
import LoadingSpinner from 'components/loading-spinner';
import { filtersActions } from 'modules';
import { toTitleCase } from 'utils/misc';

import { StringFilterProps } from './types';

export const StringFilter: FC<StringFilterProps> = ({ field, filterValue }: StringFilterProps) => {
  const dispatch = useAppDispatch();

  const { isLoading, isError, data } = useEnums();

  const options = useMemo(() => {
    if (isLoading || isError) {
      return [];
    }

    const match = data.find((e) => e.name === field.id);
    if (!match) {
      return [];
    }

    return Object.entries(match.data)
      .map(([key, value]) => ({
        label: toTitleCase(key),
        value: `${value}`,
      }))
      .sort((optionA, optionB) => optionA.label.localeCompare(optionB.label));
  }, [field, isLoading, isError, data]);

  return (
    <div>
      <label htmlFor={field.id} className="text-xs font-semibold uppercase text-green">
        {field.label}
        {isLoading && (
          <div className="inline-block ml-2">
            <LoadingSpinner inline mini transparent />
          </div>
        )}
      </label>
      <Select
        id={field.id}
        options={options}
        placeholder="Choose one item"
        value={filterValue}
        onChange={({ value }) => {
          const filter = { field: field.id, value: value };
          dispatch(filtersActions.addFilter(filter));
        }}
        className="mt-2 invalid:border-red"
        disabled={isLoading || isError}
      />
    </div>
  );
};

export default StringFilter;
