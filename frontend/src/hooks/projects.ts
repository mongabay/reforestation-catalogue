import { useMutation, useQuery, UseQueryOptions } from 'react-query';

import { Categories, Filter, Project, ProjectFormData } from 'types';

import { getCatalogData } from 'services/catalog';

export const fetchProjects = async (filters: Filter[], search: string, sort: Categories) => {
  const projects = await getCatalogData();
  return projects;
};

export const fetchProject = async (id: Project['id']) => {
  const projects = await getCatalogData();
  return projects.find((project) => project.id == id);
};

export const createProject = async (values: ProjectFormData) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
    method: 'POST',
    body: JSON.stringify(values),
  }).then((res) => res.json());

export const updateProject = async ({
  id,
  values,
}: {
  id: Project['id'];
  values: ProjectFormData;
}) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
  }).then((res) => res.json());

export const useProjects = (filters: Filter[], search: string, sort: Categories) =>
  useQuery(['projects', filters, search, sort], () => fetchProjects(filters, search, sort));

export const useProject = (id: Project['id'], options?: UseQueryOptions<Project, unknown>) =>
  useQuery(['project', id], () => fetchProject(id), options);

export const useCreateProject = () => useMutation(createProject);

export const useUpdateProject = () => useMutation(updateProject);
