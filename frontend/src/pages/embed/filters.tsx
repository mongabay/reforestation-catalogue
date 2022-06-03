import { GetServerSideProps } from 'next';

import { useAppSelector } from 'hooks/redux';

import Button from 'components/button';
import CatalogFilters from 'components/catalog-filters';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import MatchingResultsSentence from 'components/matching-results-sentence';
import NakedPageLayout, { NakedPageLayoutProps } from 'layouts/naked';
import wrapper from 'lib/store';
import { globalActions, globalSelectors } from 'modules';
import { PageComponent } from 'types';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(globalActions.restoreState(context.query));
    return { props: {} };
  }
);

export const EmbedFiltersPage: PageComponent<{}, NakedPageLayoutProps> = () => {
  const serializedState = useAppSelector(globalSelectors.selectSerializedState);

  return (
    <>
      <Head title="Filters embed" />
      <LayoutContainer className="items-center py-3 md:flex md:items-stretch gap-11">
        <div>
          <h1 className="font-serif text-3xl font-bold text-green">Find Projects of Interest</h1>
          <p className="mt-4">
            Use these filters to locate reforestation projects that align with your interests and
            priorities.
          </p>
          <p className="mt-8 font-semibold font-sm">
            <MatchingResultsSentence />
          </p>
          <div className="mt-8">
            <CatalogFilters />
          </div>
        </div>
        <div className="flex-grow md:flex md:items-center md:justify-center">
          <Button
            to={{ pathname: '/explore', query: serializedState }}
            target="_blank"
            className="justify-center mt-8"
          >
            View on the Reforestation Catalog
          </Button>
        </div>
      </LayoutContainer>
    </>
  );
};

EmbedFiltersPage.layout = {
  Component: NakedPageLayout,
};

export default EmbedFiltersPage;
