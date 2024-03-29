import { FC, useState, useRef, useEffect, useCallback } from 'react';

import Image from 'next/image';

import { GetServerSideProps } from 'next';

import { useAppDispatch } from 'hooks/redux';

import Button from 'components/button';
import CatalogFilters from 'components/catalog-filters';
import GlossaryModal from 'components/glossary-modal';
import Head from 'components/head';
import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';
import MatchingResultsSentence from 'components/matching-results-sentence';
import NewsletterSignup from 'components/newsletter-signup';
import ProjectCatalog from 'components/project-catalog';
import ProjectSearch from 'components/project-search';
import StepByStepGuidance from 'components/step-by-step-guidance';
import Tooltip from 'components/tooltip';
import UrlSync from 'components/url-sync';
import ExplorePageLayout from 'layouts/explore-page';
import { StaticPageLayoutProps } from 'layouts/static-page';
import wrapper from 'lib/store';
import { filtersActions, globalActions } from 'modules';
import { PageComponent } from 'types';
import { logEvent } from 'utils/analytics';

import LayersIcon from 'svgs/layers.svg';
import LeftArrowIcon from 'svgs/left-arrow.svg';

const FIRST_VISIT_COOKIE_NAME = 'first_visit';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const isFirstVisit = !(FIRST_VISIT_COOKIE_NAME in context.req.cookies);
    const emptyQuery = Object.keys(context.query).length === 0;

    let showWelcomeScreen = false;
    if (isFirstVisit && emptyQuery) {
      showWelcomeScreen = true;
      context.res.setHeader('Set-Cookie', `${FIRST_VISIT_COOKIE_NAME}=false`);
    }

    await store.dispatch(globalActions.restoreState(context.query));

    return {
      props: {
        showWelcomeScreen,
      },
    };
  }
);

const WelcomeScreen: FC<{
  onNavigateToCatalog: () => void;
  onNavigateToGuidance: () => void;
}> = ({ onNavigateToCatalog, onNavigateToGuidance }) => {
  const onClickGuidance = useCallback(() => {
    logEvent('Start guidance');
    onNavigateToGuidance();
  }, [onNavigateToGuidance]);

  return (
    <div className="flex-grow lg:relative">
      <LayoutContainer className="flex justify-center lg:justify-end lg:w-[calc(1024px_-_40%)] xl:w-[calc(1280px_-_40%)] 2xl:w-[calc(1536px_-_40%)] lg:ml-[40%] py-12 md:py-20">
        <div className="lg:flex-grow lg:pl-24">
          <div className="relative lg:-ml-32 before:block before:absolute before:h-full before:aspect-square before:bg-white before:rounded-full before:-translate-x-1/2 before:z-10">
            <div className="relative z-10 flex flex-col-reverse items-center gap-4 md:flex-row lg:-ml-12">
              <h1 className="font-serif text-4xl font-bold text-center text-grey-dark lg:text-left">
                A Transparency Index
              </h1>
              <Image
                src="/images/about-chart.png"
                width={183}
                height={203}
                alt=""
                className="shrink-0"
              />
            </div>
          </div>
          <p className="max-w-lg text-center mt-11 lg:text-left">
            Transparency is a signal that a tree-planting organization is aware of the complexities
            involved in a successful restoration project and has both the staff and capacity to
            organize, monitor, and report back on its results. If an organization does not disclose
            important information about its projects, it may be prudent to ask why.
          </p>
          <h2 className="font-serif text-3xl font-bold text-center mt-11 text-grey-dark lg:text-left">
            Discover projects of interest
          </h2>
          <p className="mt-1.5 max-w-lg text-center lg:text-left">
            Start with an initial step-by-step guidance or go directly to the projects database.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-8 md:flex-row lg:justify-start">
            <Button onClick={onClickGuidance} className="min-w-[227px] justify-center">
              Start step-by-step guidance
            </Button>
            <Button
              theme="secondary-green"
              onClick={onNavigateToCatalog}
              className="min-w-[227px] justify-center"
            >
              Go to Project Catalog
            </Button>
          </div>
        </div>
      </LayoutContainer>
      <div className="hidden lg:block relative w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-2/5 lg:h-full bg-[#013329]/20 bg-blend-normal">
        <div className="absolute inset-0 object-cover w-full h-full -z-10">
          <Image layout="fill" objectFit="cover" src="/images/explore-welcome.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

const CatalogScreen: FC<{ onNavigateToGuidance: () => void }> = ({ onNavigateToGuidance }) => {
  const dispatch = useAppDispatch();

  const catalogRef = useRef<HTMLDivElement>(null);

  const [showGlossaryModal, setShowGlossaryModal] = useState(false);
  const [showNewsletterSignup, setShowNewsletterSignup] = useState(false);

  const onClickGuidance = useCallback(() => {
    logEvent('Start guidance');
    onNavigateToGuidance();
  }, [onNavigateToGuidance]);

  return (
    <>
      <GlossaryModal open={showGlossaryModal} onDismiss={() => setShowGlossaryModal(false)} />
      <NewsletterSignup
        open={showNewsletterSignup}
        onDismiss={() => setShowNewsletterSignup(false)}
      />
      <aside className="bg-grey-light w-full md:w-[420px] flex-shrink-0 pt-6 pl-5 md:pl-10">
        <div className="p-1 pr-6 md:pr-11 md:h-full md:overflow-y-auto">
          <Button className="w-full md:w-auto" onClick={onClickGuidance}>
            <Icon icon={LeftArrowIcon} aria-hidden className="h-3 mr-2" />
            Step-by-step Guidance
          </Button>
          <div className="flex items-center justify-between mt-8 md:mt-12">
            <h1 className="font-serif text-3xl font-bold text-green">Filters</h1>
            <Button theme="link" onClick={() => dispatch(filtersActions.clearFilters())}>
              Clear all Filters
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
        <div className="flex flex-col w-full">
          <div className="px-5 md:ml-6 md:pr-12 md:px-0">
            <p className="flex-shrink-0 mt-8 font-semibold text-center font-sm text-grey-medium">
              <MatchingResultsSentence />
            </p>
            <div className="flex-shrink-0 mt-2">
              <ProjectSearch />
            </div>
          </div>
          <div
            ref={catalogRef}
            className="pt-8 mt-2 md:overflow-y-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            <div className="px-5 pb-8 md:pr-12 md:px-0">
              <ProjectCatalog hightlightSortingCategory />
            </div>
            <div className="py-12 text-white md:pl-6 bg-orange">
              <LayoutContainer>
                <p className="max-w-3xl font-serif text-3xl font-bold md:leading-tight">
                  Subscribe to our newsletter to find out about reforestation projects, original
                  stories, activism awareness and more.
                </p>
                <Button
                  theme="primary-white"
                  onClick={() => setShowNewsletterSignup(true)}
                  className="justify-center mt-10 md:inline-flex md:px-12"
                >
                  <span className="text-orange">Subscribe</span>
                </Button>
              </LayoutContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ExplorePage: PageComponent<{ showWelcomeScreen: boolean }, StaticPageLayoutProps> = ({
  showWelcomeScreen,
}) => {
  const [screen, setScreen] = useState<'welcome' | 'catalog' | 'guidance'>(
    showWelcomeScreen ? 'welcome' : 'catalog'
  );

  // When the screen changes, we make sure to scroll at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [screen]);

  return (
    <>
      <Head title="Explore" />
      <UrlSync />
      {screen === 'welcome' && (
        <WelcomeScreen
          onNavigateToCatalog={() => setScreen('catalog')}
          onNavigateToGuidance={() => setScreen('guidance')}
        />
      )}
      {screen === 'catalog' && <CatalogScreen onNavigateToGuidance={() => setScreen('guidance')} />}
      {screen === 'guidance' && (
        <StepByStepGuidance onNavigateToCatalog={() => setScreen('catalog')} />
      )}
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
