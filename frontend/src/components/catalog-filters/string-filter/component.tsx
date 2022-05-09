import { FC } from 'react';

import Select from 'components/forms/select';

import { FilterProps } from '../types';

export const StringFilter: FC<FilterProps> = ({ field, onCreate }: FilterProps) => (
  <Select
    id={field.id}
    aria-label={field.label}
    options={field.options}
    onChange={({ value }) => {
      onCreate({ field: field.id, value });
    }}
  />
);

export default StringFilter;
