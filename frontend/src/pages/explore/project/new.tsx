import React from 'react';

import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectForm from 'components/project-form';
import FormPageLayout, { FormLayoutProps } from 'layouts/form';
import { PageComponent } from 'types';

export const NewProjectPage: PageComponent<{}, FormLayoutProps> = () => (
  <LayoutContainer className="py-12 sm:py-24">
    <Head title="Submit project" />
    <div className="max-w-lg mx-auto mb-6 sm:mb-8">
      <h1 className="font-serif text-3xl font-bold text-center text-green">Submit project</h1>
    </div>
    <ProjectForm />
  </LayoutContainer>
);

NewProjectPage.layout = {
  Component: FormPageLayout,
};

export default NewProjectPage;
