import { FC, useState } from 'react';

import { useAppDispatch } from 'hooks/redux';

import Input from 'components/forms/input';
import { filtersActions } from 'modules';
import { logEvent } from 'utils/analytics';

import { NumberFilterProps } from './types';

export const NumberFilter: FC<NumberFilterProps> = ({
  field,
  filterValue,
  event,
}: NumberFilterProps) => {
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
        pattern="\d*"
        value={(filterValue as number) ?? ''}
        onChange={(value) => {
          const filter = { field: field.id, value: value.length === 0 ? null : +value };
          dispatch(filtersActions.removeFilter(filter));

          if (filter.value !== null) {
            dispatch(filtersActions.addFilter(filter));
            if (event) {
              logEvent(...event);
            }
          }
        }}
        step={1}
        className="mt-2 invalid:border-red"
      />
    </div>
  );
};

export default NumberFilter;
