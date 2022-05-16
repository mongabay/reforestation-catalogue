import { QueryClient, useQuery, UseQueryOptions } from 'react-query';

import { Categories, Filter, Project } from 'types';

import { getCatalogData } from 'services/catalog';

export const fetchProject = async (id: Project['id']) => {
  const projects = await getCatalogData();
  return projects.find((project) => project.id == id);
};

export const useProjects = (filters: Filter[], search: string, sort: Categories) =>
  useQuery(['projects', filters, search, sort], getCatalogData);

export const useProject = (id: Project['id'], options?: UseQueryOptions<Project, unknown>) =>
  useQuery(['project', id], () => fetchProject(id), options);
