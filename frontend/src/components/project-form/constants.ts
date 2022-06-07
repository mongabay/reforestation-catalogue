import ContextStep from './context-step';
import EcologicalStep from './ecological-step';
import EconomicStep from './economic-step';
import InformationStep from './information-step';
import InstitutionalStep from './institutional-step';
import SocialStep from './social-step';
import { ProjectFormStep } from './types';

export const PROJECT_FORM_STEPS: ProjectFormStep[] = [
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
    Component: EconomicStep,
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
