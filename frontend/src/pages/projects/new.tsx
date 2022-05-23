import React, { useState } from 'react';

import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectForm, { ProjectFormStep } from 'components/project-form';
import ContextStep from 'components/project-form/context-step';
import EcologicalStep from 'components/project-form/ecological-step';
import economicStep from 'components/project-form/economic-step';
import InformationStep from 'components/project-form/information-step';
import InstitutionalStep from 'components/project-form/institutional-step';
import SocialStep from 'components/project-form/social-step';
import FormPageLayout from 'layouts/form';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { PageComponent } from 'types';

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

export const NewProjectPage: PageComponent<{}, StaticPageLayoutProps> = () => {
  const [step, setStep] = useState(0);

  return (
    <LayoutContainer className="py-12 sm:py-24">
      <Head title="Submit project" />
      <div className="max-w-lg mx-auto mb-6 sm:mb-8">
        <h1 className="font-serif text-3xl font-bold text-center text-green">Submit project</h1>
      </div>
      <ProjectForm currentStep={step} onChangeStep={setStep} steps={STEPS} />
    </LayoutContainer>
  );
};

NewProjectPage.layout = {
  Component: FormPageLayout,
};

export default NewProjectPage;
