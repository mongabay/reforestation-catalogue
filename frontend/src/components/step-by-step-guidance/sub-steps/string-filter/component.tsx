import { FC } from 'react';

import { useEnumOptions } from 'hooks/enums';
import { useAppDispatch } from 'hooks/redux';

import Select from 'components/forms/select';
import LoadingSpinner from 'components/loading-spinner';
import { filtersActions } from 'modules';
import { logEvent } from 'utils/analytics';

import { StringFilterProps } from './types';

export const StringFilter: FC<StringFilterProps> = ({
  field,
  filterValue,
  event,
}: StringFilterProps) => {
  const dispatch = useAppDispatch();

  const { isLoading, isError, data } = useEnumOptions(field.id);

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
        options={data.map((option) => ({ ...option, value: `${option.value}` }))}
        placeholder="Choose one item"
        value={filterValue}
        onChange={({ value }) => {
          const filter = { field: field.id, value: value };
          dispatch(filtersActions.addFilter(filter));
          if (event) {
            logEvent(...event);
          }
        }}
        className="mt-2 invalid:border-red"
        disabled={isLoading || isError}
      />
    </div>
  );
};

export default StringFilter;
