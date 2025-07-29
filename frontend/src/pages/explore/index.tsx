import { FC, useState, useRef, useEffect, useCallback } from 'react';

import Image from 'next/image';

import ExplorePageLayout from 'layouts/explore-page';
import { StaticPageLayoutProps } from 'layouts/static-page';
import wrapper from 'lib/store';
import { globalActions } from 'modules';
import { GetServerSideProps } from 'next';
import { PageComponent } from 'types';
import { logEvent } from 'utils/analytics';

import { useAppDispatch } from 'hooks/redux';

import Button from 'components/button';
import GlossaryModal from 'components/glossary-modal';
import Head from 'components/head';
import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';
import MatchingResultsSentence from 'components/matching-results-sentence';
import NewsletterSignup from 'components/newsletter-signup';
import ProjectCatalog from 'components/project-catalog';
import ProjectSearch from 'components/project-search';
import StayUpdatedSection from 'components/stay-updated-section';
import StepByStepGuidance from 'components/step-by-step-guidance';
import Tooltip from 'components/tooltip';
import UrlSync from 'components/url-sync';

import LayersIcon from 'svgs/layers.svg';
import LeftArrowIcon from 'svgs/left-arrow.svg';
import PlusIcon from 'svgs/plus.svg';

const CatalogScreen: FC<{ setIsFiltersOpen: (isOpen: boolean) => void }> = ({
  setIsFiltersOpen,
}) => {
  const catalogRef = useRef<HTMLDivElement>(null);

  const [showGlossaryModal, setShowGlossaryModal] = useState(false);
  const [showNewsletterSignup, setShowNewsletterSignup] = useState(false);

  const onOpenFilters = useCallback(() => {
    logEvent('Start guidance');
    setIsFiltersOpen(true);
  }, [setIsFiltersOpen]);

  return (
    <>
      <GlossaryModal open={showGlossaryModal} onDismiss={() => setShowGlossaryModal(false)} />
      <NewsletterSignup
        open={showNewsletterSignup}
        onDismiss={() => setShowNewsletterSignup(false)}
      />
      <div className="container mx-auto relative flex flex-col w-full text-white">
        <div className="fixed right-0 origin-bottom-right -rotate-90 md:absolute top-32 md:top-4">
          <Button
            theme="primary-green"
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
        <div className="flex flex-col w-full">
          <div className="px-5 md:ml-6 md:pr-8 md:px-0 flex gap-2 items-end">
            <div className="flex-1 flex-grow">
              <ProjectSearch />
            </div>
            <Button theme="secondary-green" onClick={onOpenFilters} className="mt-2 pr-[10px] h-11">
              Filters Guide
              <span className="ml-[10px] bg-green-dark rounded-full p-1">
                <Icon icon={PlusIcon} aria-hidden className="w-4 h-4 text-primary" />
              </span>
            </Button>
          </div>
          <p className="flex-shrink-0 mt-8 font-semibold text-center font-sm text-grey-medium">
            <MatchingResultsSentence />
          </p>
          <div
            ref={catalogRef}
            className="pt-8 mt-2 md:overflow-y-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            <div className="px-5 pb-8 md:pr-12 md:px-0">
              <ProjectCatalog hightlightSortingCategory />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <StayUpdatedSection
          className="max-w-none"
          showNewsletterSignup={showNewsletterSignup}
          setShowNewsletterSignup={setShowNewsletterSignup}
        />
      </div>
    </>
  );
};

export const ExplorePage: PageComponent<StaticPageLayoutProps> = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  return (
    <>
      <Head title="Explore" />
      <UrlSync />
      <CatalogScreen setIsFiltersOpen={setIsFiltersOpen} />
      <StepByStepGuidance
        open={isFiltersOpen}
        onDismiss={() => setIsFiltersOpen(false)}
        setIsFiltersOpen={setIsFiltersOpen}
      />
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
