import { FC } from 'react';

import { useAppDispatch } from 'hooks/redux';

import Input from 'components/forms/input';
import { filtersActions } from 'modules';

import { YearFilterProps } from './types';

export const YearFilter: FC<YearFilterProps> = ({ field, filterValue }: YearFilterProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <label htmlFor={field.id} className="text-xs font-semibold uppercase text-green">
        {field.label}
      </label>
      <Input
        id={field.id}
        name={field.id}
        type="number"
        pattern="\d{4}"
        defaultValue={filterValue ?? ''}
        onChange={(year) => {
          const isValid = year.length === 0 || (year > 2000 && year < new Date().getFullYear());

          if (isValid) {
            const filter = { field: field.id, value: year.length === 0 ? null : +year };
            dispatch(filtersActions.removeFilter(filter));

            if (filter.value !== null) {
              dispatch(filtersActions.addFilter(filter));
            }
          }
        }}
        min={2000}
        max={new Date().getFullYear()}
        className="mt-2 invalid:border-red"
        aria-describedby={`${field.id}-description`}
      />
      <p id={`${field.id}-description`} className="mt-1 text-xs text-grey-dark">
        Value between 2000 and {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default YearFilter;
