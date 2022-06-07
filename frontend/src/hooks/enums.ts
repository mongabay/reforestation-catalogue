import { useMemo } from 'react';

import { useQuery, UseQueryOptions } from 'react-query';

import { Enum } from 'types';
import { toTitleCase } from 'utils/misc';

export const fetchEnums = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/enums`)
    .then((res) => res.json())
    .then((res) => res as Enum[]);
};

export const useEnums = (options?: UseQueryOptions<Enum[], unknown>) =>
  useQuery(['enums'], fetchEnums, options);

export const useEnumOptions = (name: Enum['name'], options?: UseQueryOptions<Enum[], unknown>) => {
  const { isLoading, isError, data } = useEnums(options);

  const formattedData = useMemo(() => {
    if (isLoading || isError) {
      return [];
    }

    const match = data.find((e) => e.name === name);
    if (!match) {
      return [];
    }

    return Object.entries(match.data)
      .map(([key, value]) => ({
        label: toTitleCase(key),
        value,
      }))
      .sort((optionA, optionB) => optionA.label.localeCompare(optionB.label));
  }, [name, isLoading, isError, data]);

  return {
    isLoading,
    isError,
    data: formattedData,
  };
};
