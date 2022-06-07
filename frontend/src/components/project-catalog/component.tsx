import { FC, Fragment, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { useProjects } from 'hooks/projects';
import { useAppSelector } from 'hooks/redux';

import Button from 'components/button';
import LoadingSpinner from 'components/loading-spinner';
import ProjectCard from 'components/project-card';
import { filtersSelectors, searchSelectors, sortSelectors } from 'modules';

import { ProjectCatalogProps } from './types';

export const ProjectCatalog: FC<ProjectCatalogProps> = ({
  openInNewWindow,
  hightlightSortingCategory,
}: ProjectCatalogProps) => {
  const { ref, inView } = useInView();

  const filters = useAppSelector(filtersSelectors.selectFilters);
  const search = useAppSelector(searchSelectors.selectSearch);
  const sort = useAppSelector(sortSelectors.selectSort);

  const { isLoading, isError, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useProjects(
    filters,
    search,
    sort
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="relative py-16">
        <LoadingSpinner inner transparent />
      </div>
    );
  }

  if (isError) {
    return <p className="py-16 font-semibold text-center">Unable to load the catalog</p>;
  }

  if (data.pages.length === 1 && data.pages[0].data.length === 0) {
    return <p className="py-16 font-semibold text-center">No result</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {data.pages.map((page) => (
          <Fragment key={page.meta.current_page}>
            {page.data.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                highlightedCategory={hightlightSortingCategory ? sort : undefined}
                openInNewWindow={openInNewWindow}
              />
            ))}
          </Fragment>
        ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center mt-11">
          <Button ref={ref} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage && (
              <div className="inline-block mr-2">
                <LoadingSpinner inline mini transparent invertColor />
              </div>
            )}
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectCatalog;
