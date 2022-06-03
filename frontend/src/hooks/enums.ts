import { useQuery, UseQueryOptions } from 'react-query';

import { Enum } from 'types';

export const fetchEnums = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/enums`)
    .then((res) => res.json())
    .then((res) => res as Enum[]);
};

export const useEnums = (options?: UseQueryOptions<Enum[], unknown>) =>
  useQuery(['enums'], fetchEnums, options);
