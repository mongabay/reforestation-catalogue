import { GetServerSideProps } from 'next';

import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectCatalog from 'components/project-catalog';
import NakedPageLayout, { NakedPageLayoutProps } from 'layouts/naked';
import wrapper from 'lib/store';
import { globalActions } from 'modules';
import { PageComponent } from 'types';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(globalActions.restoreState(context.query));
    return { props: {} };
  }
);

export const EmbedCatalogPage: PageComponent<{}, NakedPageLayoutProps> = () => (
  <>
    <Head title="Catalog embed" />
    <LayoutContainer className="py-3">
      <ProjectCatalog hightlightSortingCategory openInNewWindow />
    </LayoutContainer>
  </>
);

EmbedCatalogPage.layout = {
  Component: NakedPageLayout,
};

export default EmbedCatalogPage;
