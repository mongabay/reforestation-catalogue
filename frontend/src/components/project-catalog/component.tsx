import { FC } from 'react';

import { useProjects } from 'hooks/projects';
import { useAppSelector } from 'hooks/redux';

import LoadingSpinner from 'components/loading-spinner';
import ProjectCard from 'components/project-card';
import { filtersSelectors, searchSelectors, sortSelectors } from 'modules';
import { Categories } from 'types';

import { ProjectCatalogProps } from './types';

export const ProjectCatalog: FC<ProjectCatalogProps> = ({
  openInNewWindow,
  hightlightSortingCategory,
}: ProjectCatalogProps) => {
  const filters = useAppSelector(filtersSelectors.selectFilters);
  const search = useAppSelector(searchSelectors.selectSearch);
  const sort = useAppSelector(sortSelectors.selectSort);

  const { isLoading, isError, data } = useProjects(filters, search, sort);

  if (isLoading) {
    return <LoadingSpinner inner transparent />;
  }

  if (isError) {
    return <p className="font-semibold text-center">Unable to load the catalog</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {data.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          // TODO: should be the sorting option which determines highlight
          highlightedCategory={Categories.Context}
          openInNewWindow={openInNewWindow}
        />
      ))}
    </div>
  );
};

export default ProjectCatalog;
