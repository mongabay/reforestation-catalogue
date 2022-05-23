import React, { useState } from 'react';

import { GetServerSideProps } from 'next';

import { fetchProject } from 'hooks/projects';

import Button from 'components/button';
import Head from 'components/head';
import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';
import ProjectForm, { ProjectFormStep } from 'components/project-form';
import ContextStep from 'components/project-form/context-step';
import EcologicalStep from 'components/project-form/ecological-step';
import economicStep from 'components/project-form/economic-step';
import InformationStep from 'components/project-form/information-step';
import InstitutionalStep from 'components/project-form/institutional-step';
import SocialStep from 'components/project-form/social-step';
import FormPageLayout, { FormLayoutProps } from 'layouts/form';
import { PageComponent, Project } from 'types';

import LeftArrowIcon from 'svgs/left-arrow.svg';

export const STEPS: ProjectFormStep[] = [
  {
    name: 'Your contact information',
    description:
      'Please share your contact information and any relevant background needed to understand your relationship to the project. ',
    Component: InformationStep,
  },
  {
    name: 'Project context',
    description:
      'Start by defining the most important context for assessing the success of tree-planting projects.',
    Component: ContextStep,
  },
  {
    name: 'Economic indicators',
    description:
      'Funding for reforestation projects can come from many different sources with diverse motivations. These economic criteria will help you identify who is benefiting and assess if a project is truly sustainable.',
    Component: economicStep,
  },
  {
    name: 'Ecological indicators',
    description:
      'These ecological criteria are important for understanding if the right trees are being planted in the right place.',
    Component: EcologicalStep,
  },
  {
    name: 'Social indicators',
    description:
      'When society, especially local communities, benefits from reforestation projects, forests are more likely to be protected over the long term.',
    Component: SocialStep,
  },
  {
    name: 'Institutional indicators',
    description:
      'This set of criteria has to do with the management and ownership of projects. These questions may seem basic, but it can be difficult to tell who is actually doing the work on the ground versus funding the project.',
    Component: InstitutionalStep,
  },
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const project = await fetchProject(+id);

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
  const [step, setStep] = useState(0);

  return (
    <LayoutContainer className="pt-6 pb-12 sm:pb-24">
      <Head title="Submit project" />
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
          Submit project changes
        </h1>
      </div>
      <ProjectForm currentStep={step} onChangeStep={setStep} steps={STEPS} project={project} />
    </LayoutContainer>
  );
};

NewProjectPage.layout = {
  Component: FormPageLayout,
};

export default NewProjectPage;
