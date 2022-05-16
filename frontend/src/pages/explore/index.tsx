import { useState, useRef } from 'react';

import Image from 'next/image';

import { GetServerSideProps } from 'next';

import { useAppDispatch } from 'hooks/redux';

import Button from 'components/button';
import CatalogFilters from 'components/catalog-filters';
import GlossaryModal from 'components/glossary-modal';
import Head from 'components/head';
import Icon from 'components/icon';
import ProjectCatalog from 'components/project-catalog';
import ProjectSearch from 'components/project-search';
import Tooltip from 'components/tooltip';
import UrlSync from 'components/url-sync';
import ExplorePageLayout from 'layouts/explore-page';
import { StaticPageLayoutProps } from 'layouts/static-page';
import wrapper from 'lib/store';
import { filtersActions, globalActions } from 'modules';
import { PageComponent } from 'types';

import LayersIcon from 'svgs/layers.svg';
import LeftArrowIcon from 'svgs/left-arrow.svg';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(globalActions.restoreState(context.query));
    return { props: {} };
  }
);

export const ExplorePage: PageComponent<{}, StaticPageLayoutProps> = (props) => {
  const dispatch = useAppDispatch();

  const catalogRef = useRef<HTMLDivElement>(null);

  const [showGuidanceModal, setShowGuidanceModal] = useState(false);
  const [showGlossaryModal, setShowGlossaryModal] = useState(false);

  return (
    <>
      <Head />
      <UrlSync />
      <GlossaryModal open={showGlossaryModal} onDismiss={() => setShowGlossaryModal(false)} />
      <aside className="mr-6 bg-grey-light w-full md:w-[420px] flex-shrink-0 pt-6 px-5 md:px-10">
        <div className="p-1 md:h-full md:overflow-y-scroll">
          <Button className="w-full" onClick={() => setShowGuidanceModal(true)}>
            <Icon icon={LeftArrowIcon} aria-hidden className="h-3 mr-2" />
            Go back to the step by step guidance
          </Button>
          <div className="flex items-center justify-between mt-8 md:mt-12">
            <h1 className="font-serif text-3xl font-bold text-green">Filters</h1>
            <Button theme="link" onClick={() => dispatch(filtersActions.clearFilters())}>
              Clear all filters
            </Button>
          </div>
          <div className="mt-6">
            <CatalogFilters />
          </div>
        </div>
      </aside>
      <div className="relative flex w-full">
        <div className="fixed right-0 origin-bottom-right -rotate-90 md:absolute top-32 md:top-0">
          <Button
            className="rounded-b-none rounded-t-md"
            onClick={() => setShowGlossaryModal(true)}
          >
            <span className="text-base font-semibold">Glossary</span>
          </Button>
        </div>
        <div className="fixed flex justify-between md:absolute bottom-4 right-4 md:bottom-12 md:right-12">
          <Tooltip
            trigger="click"
            arrow={false}
            className="max-w-full md:max-w-md"
            placement="top-end"
            content={
              <div className="text-xs">
                <h1 className="mb-5 font-semibold">Completeness of the line</h1>
                <Image src="/images/circle-completeness.svg" alt="" width={137} height={34} />
                <p className="mt-3">
                  The completeness of the line indicates how much information is publicly disclosed
                  about the project.
                </p>
                <h1 className="mb-5 font-semibold mt-9">Color of the line</h1>
                <div className="grid grid-cols-3 gap-5 text-center">
                  <Image src="/images/grey-circle.svg" alt="" width={32} height={32} />
                  <Image src="/images/black-circle.svg" alt="" width={32} height={32} />
                  <Image src="/images/orange-circle.svg" alt="" width={32} height={32} />
                  <p>Gray lines denote projects that are no longer active</p>
                  <p>Black lines means that projects are ongoing</p>
                  <p>
                    The orange line highlights the category selected to sort the projects from
                    greatest to least transparency
                  </p>
                </div>
              </div>
            }
          >
            <Button>
              <Icon icon={LayersIcon} aria-hidden className="w-4 h-4 mr-2" />
              <span className="font-semibold">Legend</span>
            </Button>
          </Tooltip>
          <Button
            className="justify-center hidden w-10 h-10 pl-0 pr-0 ml-12 md:inline-flex"
            onClick={() => catalogRef.current.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="sr-only">Scroll to top</span>
            <Icon icon={LeftArrowIcon} aria-hidden className="w-4 h-4 rotate-90" />
          </Button>
        </div>
        <div className="flex flex-col w-full px-5 md:pr-12 md:px-0">
          <p className="flex-shrink-0 mt-8 font-semibold text-center font-sm text-grey-medium">
            46 projects (13%) out of 240 meet your filtering criteria
          </p>
          <div className="flex-shrink-0 mt-2">
            <ProjectSearch />
          </div>
          <div
            ref={catalogRef}
            className="pt-8 pb-8 mt-2 md:overflow-y-scroll focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            <ProjectCatalog hightlightSortingCategory />
          </div>
        </div>
      </div>
    </>
  );
};

ExplorePage.layout = {
  Component: ExplorePageLayout,
  props: {
    mainProps: { className: 'flex flex-col md:flex-row items-stretch justify-between' },
  },
};

export default ExplorePage;
