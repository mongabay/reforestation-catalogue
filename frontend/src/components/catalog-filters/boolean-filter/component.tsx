import { FC } from 'react';

import Radio from 'components/forms/radio';

import { FilterProps } from '../types';

export const BooleanFilter: FC<FilterProps> = ({ field, onCreate }: FilterProps) => (
  <fieldset>
    <legend className="sr-only">{field.label}</legend>
    <Radio
      id="yes-radio"
      name={field.id}
      onChange={() => onCreate({ field: field.id, value: true })}
    >
      Yes
    </Radio>
    <Radio
      id="no-radio"
      name={field.id}
      onChange={() => onCreate({ field: field.id, value: false })}
    >
      No
    </Radio>
  </fieldset>
);

export default BooleanFilter;
