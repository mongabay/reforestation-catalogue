import { FC } from 'react';

import { useAppDispatch } from 'hooks/redux';

import Radio from 'components/forms/radio';
import { filtersActions } from 'modules';
import { logEvent } from 'utils/analytics';

import { BooleanFilterProps } from './types';

export const BooleanFilter: FC<BooleanFilterProps> = ({
  field,
  filterValue,
  event,
}: BooleanFilterProps) => {
  const dispatch = useAppDispatch();

  return (
    <fieldset>
      <legend className="text-xs font-semibold uppercase text-green">{field.label}</legend>
      <div className="flex items-start gap-3 mt-2">
        <Radio
          id="yes-radio"
          theme="toggle"
          name={field.id}
          checked={filterValue === true}
          onChange={() => {
            const filter = { field: field.id, value: true };
            dispatch(filtersActions.addFilter(filter));
            if (event) {
              logEvent(...event);
            }
          }}
        >
          Yes
        </Radio>
        <Radio
          id="no-radio"
          theme="toggle"
          name={field.id}
          checked={filterValue === false}
          onChange={() => {
            const filter = { field: field.id, value: false };
            dispatch(filtersActions.addFilter(filter));
          }}
        >
          No
        </Radio>
      </div>
    </fieldset>
  );
};

export default BooleanFilter;
