import { useQuery } from 'react-query';

import { Filter } from 'types';

import { getCatalogData } from 'services/catalog';

export const useProjects = (filters: Filter[], search: string) =>
  useQuery(['projects', filters, search], getCatalogData);
