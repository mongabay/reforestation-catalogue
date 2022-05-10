import { useQuery } from 'react-query';

import { Categories, Filter } from 'types';

import { getCatalogData } from 'services/catalog';

export const useProjects = (filters: Filter[], search: string, sort: Categories) =>
  useQuery(['projects', filters, search, sort], getCatalogData);
