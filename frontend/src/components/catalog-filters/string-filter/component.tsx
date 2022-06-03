import { FC, useMemo } from 'react';

import { useEnums } from 'hooks/enums';

import Select from 'components/forms/select';
import { toTitleCase } from 'utils/misc';

import { FilterProps } from '../types';

export const StringFilter: FC<FilterProps> = ({ field, onCreate }: FilterProps) => {
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
    <Select
      id={field.id}
      aria-label={field.label}
      options={options}
      onChange={({ value }) => {
        onCreate({ field: field.id, value });
      }}
      disabled={isLoading || isError}
    />
  );
};

export default StringFilter;
