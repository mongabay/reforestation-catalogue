import { FC } from 'react';

import { useEnumOptions } from 'hooks/enums';

import Select from 'components/forms/select';

import { FilterProps } from '../types';

export const StringFilter: FC<FilterProps> = ({ field, onCreate }: FilterProps) => {
  const { isLoading, isError, data } = useEnumOptions(field.id);

  return (
    <Select
      id={field.id}
      aria-label={field.label}
      options={data.map((option) => ({ ...option, value: `${option.value}` }))}
      onChange={({ value }) => {
        onCreate({ field: field.id, value });
      }}
      disabled={isLoading || isError}
    />
  );
};

export default StringFilter;
