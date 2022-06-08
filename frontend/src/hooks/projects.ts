import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from 'react-query';

import Jsona from 'jsona';

import { APIProjectMeta, Categories, Filter, Project, ProjectFormData } from 'types';

type PromiseResult<T> = T extends Promise<infer R> ? R : never;

const dataFormatter = new Jsona();

export const fetchProjects = async (
  filters: Filter[],
  search: string,
  sort: Categories,
  options?: { page?: number; perPage?: number; highlighted?: boolean }
) => {
  const params = [
    ...filters.map((filter) => ({ [filter.field]: filter.value })),
    { search },
    { sort_by: sort },
    { order: 'desc' },
    { page_number: options?.page ?? 1 },
    { page_size: options?.perPage ?? 20 },
    ...(options?.highlighted !== undefined ? [{ highlighted: options?.highlighted }] : []),
  ];

  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/projects?${params.reduce(
      (res, param, index) =>
        `${res}${index > 0 ? '&' : ''}${Object.keys(param)[0]}=${Object.values(param)[0]}`,
      ''
    )}`
  )
    .then((res) => res.json())
    .then((res) => ({
      data: dataFormatter.deserialize(res) as Project[],
      meta: res.meta as APIProjectMeta,
    }));
};

export const fetchProject = async (id: Project['id']) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/projects/${id}`)
    .then((res) => res.json())
    .then((res) => dataFormatter.deserialize(res) as Project);
};

export const createProject = async (values: ProjectFormData) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/projects`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());

export const updateProject = async ({
  id,
  values,
}: {
  id: Project['id'];
  values: ProjectFormData;
}) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/projects/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());

export const useProjects = (
  filters: Filter[],
  search: string,
  sort: Categories,
  queryOptions?: Omit<Parameters<typeof fetchProjects>[3], 'page'>,
  options?: UseInfiniteQueryOptions<PromiseResult<ReturnType<typeof fetchProjects>>, unknown>
) =>
  useInfiniteQuery(
    ['projects', filters, search, sort],
    ({ pageParam }: QueryFunctionContext) =>
      fetchProjects(filters, search, sort, { ...(queryOptions ?? {}), page: pageParam }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.meta.current_page < lastPage.meta.pages
          ? lastPage.meta.current_page + 1
          : undefined,
      ...options,
    }
  );

export const useProject = (id: Project['id'], options?: UseQueryOptions<Project, unknown>) =>
  useQuery(['project', id], () => fetchProject(id), options);

export const useCreateProject = () => useMutation(createProject);

export const useUpdateProject = () => useMutation(updateProject);
