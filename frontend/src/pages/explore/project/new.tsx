import React, { useState } from 'react';

import Button from 'components/button';
import GlossaryModal from 'components/glossary-modal';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectForm from 'components/project-form';
import FormPageLayout, { FormLayoutProps } from 'layouts/form';
import { PageComponent } from 'types';

export const NewProjectPage: PageComponent<{}, FormLayoutProps> = () => {
  const [showGlossaryModal, setShowGlossaryModal] = useState(false);

  return (
    <div className="relative py-12 sm:py-24">
      <LayoutContainer>
        <Head title="Submit Project" />
        <GlossaryModal open={showGlossaryModal} onDismiss={() => setShowGlossaryModal(false)} />
        <div className="fixed right-0 origin-bottom-right -rotate-90 md:absolute top-32 md:top-0">
          <Button
            className="rounded-b-none rounded-t-md"
            onClick={() => setShowGlossaryModal(true)}
          >
            <span className="text-base font-semibold">Glossary</span>
          </Button>
        </div>
        <div className="max-w-lg mx-auto mb-6 sm:mb-8">
          <h1 className="font-serif text-3xl font-bold text-center text-green">Submit Project</h1>
        </div>
        <ProjectForm />
      </LayoutContainer>
    </div>
  );
};

NewProjectPage.layout = {
  Component: FormPageLayout,
};

export default NewProjectPage;
