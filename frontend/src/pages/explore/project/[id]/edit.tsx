import React, { useState } from 'react';

import { GetServerSideProps } from 'next';

import { fetchProject } from 'hooks/projects';

import Button from 'components/button';
import GlossaryModal from 'components/glossary-modal';
import Head from 'components/head';
import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';
import ProjectForm from 'components/project-form';
import FormPageLayout, { FormLayoutProps } from 'layouts/form';
import { PageComponent, Project } from 'types';

import LeftArrowIcon from 'svgs/left-arrow.svg';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const project = await fetchProject(id as Project['id']);

  return {
    notFound: !project,
    props: {
      project,
    },
  };
};

export const NewProjectPage: PageComponent<{ project: Project }, FormLayoutProps> = ({
  project,
}) => {
  const [showGlossaryModal, setShowGlossaryModal] = useState(false);

  return (
    <div className="relative pt-6 pb-12 sm:pb-24">
      <LayoutContainer>
        <Head title="Submit Project Changes" />
        <GlossaryModal open={showGlossaryModal} onDismiss={() => setShowGlossaryModal(false)} />
        <div className="fixed right-0 origin-bottom-right -rotate-90 md:absolute top-32 md:top-0">
          <Button
            className="rounded-b-none rounded-t-md"
            onClick={() => setShowGlossaryModal(true)}
          >
            <span className="text-base font-semibold">Glossary</span>
          </Button>
        </div>
        <Button
          theme="secondary-green"
          to={`/explore/project/${project.id}`}
          className="sm:inline-flex"
        >
          <Icon icon={LeftArrowIcon} aria-hidden className="h-3 mr-2" />
          Go back to the project page
        </Button>
        <div className="max-w-lg mx-auto mb-6 sm:mb-8 mt-11">
          <h1 className="font-serif text-3xl font-bold text-center text-green">
            Submit Project Changes
          </h1>
        </div>
        <ProjectForm project={project} />
      </LayoutContainer>
    </div>
  );
};

NewProjectPage.layout = {
  Component: FormPageLayout,
};

export default NewProjectPage;
