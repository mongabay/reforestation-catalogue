import { useQuery, UseQueryOptions } from 'react-query';

import Jsona from 'jsona';

import { Categories, CMSStaticPage } from 'types';

import { fetchProjects } from './projects';

const dataFormatter = new Jsona();

export const fetchAboutPageContent = async () => {
  const content = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/static_pages/about`)
    .then((res) => res.json())
    .then((res) => dataFormatter.deserialize(res) as CMSStaticPage)
    .then((res) => res.body);

  let projectsCount = '−';
  try {
    const projects = await fetchProjects([], '', Categories.Context);
    projectsCount = `${projects.meta.projects_total}`;
  } catch (e) {
    console.error(e);
  }

  return content.replace('{{projectsCount}}', projectsCount);
};

export const fetchGlossaryContent = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/static_pages/glossary`)
    .then((res) => res.json())
    .then((res) => dataFormatter.deserialize(res) as CMSStaticPage)
    .then((res) => res.body);
};

export const useGlossaryContent = (options?: UseQueryOptions<string, unknown>) =>
  useQuery(['glossary'], () => fetchGlossaryContent(), options);
