import {
  CONTEXT_CATEGORY,
  ECOLOGICAL_CATEGORY,
  ECONOMIC_CATEGORY,
  INSTITUTIONAL_CATEGORY,
  SOCIAL_CATEGORY,
} from 'services/catalog';

import { StepByStepGuidanceStep } from './types';

export const STEPS: StepByStepGuidanceStep[] = [
  {
    name: 'Context',
    description:
      'Start your journey by defining the most important context for assessing the success of tree-planting projects.',
    image: '/images/explore-guidance-context.jpg',
    category: CONTEXT_CATEGORY,
    steps: [
      {
        name: 'Approach',
        description:
          'Reforestation approaches fall under the umbrella of either active or passive restoration. Active restoration may involve directly planting seedlings, while passive restoration involves allowing forests to naturally regenerate, sometimes with a little help from humans.',
        fields: ['hasJustificationForApproach'],
      },
      {
        name: 'Location',
        description:
          'A project should disclose the explicit location where trees will be planted to help supporters monitor results. This could be as detailed as GPS coordinates for each tree or as broad as an area outlined on a map.',
        fields: ['hasExplicitLocation'],
      },
      {
        name: 'Size',
        description:
          'Knowing the size of a project is crucial for assessing all the other criteria in the database.',
        fields: ['sizeOfProjectHa'],
      },
      {
        name: 'Time frame',
        description:
          'Restoration takes time to reach its goal. How long has this project been around and is there a long-term commitment?',
        fields: ['startYear', 'endYear'],
      },
    ],
  },
  {
    name: 'Ecological',
    description:
      'These ecological criteria are important for understanding if the right trees are being planted in the right place.',
    image: '/images/explore-guidance-context.jpg',
    category: ECOLOGICAL_CATEGORY,
    steps: [
      {
        name: 'Forest type',
        description:
          'Knowing the project area’s forest type can help funders, and the projects themselves understand whether planting trees in certain areas is appropriate.',
        fields: ['forestType'],
      },
      {
        name: 'Species used',
        description:
          "Knowing the species used is crucial for understanding a project's objectives and assessing the potential for negative consequences.",
        fields: ['disclosesSpeciesUsed'],
      },
      {
        name: 'Threats',
        description:
          'A project that addresses known threats, such as creating habitat for endangered species, has clear goals, which helps projects plan their approach and measure success.',
        fields: ['addressesKnownThreats'],
      },
      {
        name: 'Fire prevention',
        description:
          'In areas where fire is a threat to forests, fire prevention methods need to be built into the approach.',
        fields: ['firePrevention'],
      },
    ],
  },
  {
    name: 'Economic',
    description:
      'Funding for reforestation projects can come from many different sources with diverse motivations. These economic criteria will help you identify who is benefiting and assess if a project is truly sustainable.',
    image: '/images/explore-guidance-context.jpg',
    category: ECONOMIC_CATEGORY,
    steps: [
      {
        name: 'Financial model',
        description:
          'A successful project should have a sustainable financial model that pays workers an equitable wage. How is the project paid for?',
        fields: ['financialModel'],
      },
      {
        name: 'Follow-up',
        description:
          'A tree planted does no good if it doesn’t survive. Projects should disclose their follow-up methods for monitoring their success.',
        fields: ['followUpDisclosed'],
      },
      {
        name: 'Seedling nurseries',
        description:
          'A project that uses local seedling nurseries can provide a reliable supply of trees and another source of work.',
        fields: ['localSeedlingNurseries'],
      },
      {
        name: 'Deforestation driver',
        description:
          'A successful project should identify and, if possible, eliminate the local drivers of deforestation. If the area remains vulnerable to deforestation, resources may be better spent elsewhere.',
        fields: ['identifyDeforestationDriver'],
      },
    ],
  },
  {
    name: 'Institutional',
    description:
      'This set of criteria has to do with the management and ownership of projects. These questions may seem basic, but it can be difficult to tell who is actually doing the work on the ground versus funding the project.',
    image: '/images/explore-guidance-context.jpg',
    category: INSTITUTIONAL_CATEGORY,
    steps: [
      {
        name: 'Organization type',
        description: 'What type of organization is managing the project?',
        fields: ['organizationType'],
      },
      {
        name: 'Project partners',
        description:
          'If an organization is just a funder, they should clearly disclose their partners on the ground.',
        fields: ['hasProjectPartners'],
      },
      {
        name: 'Who’s involved',
        description:
          'Understanding who the stakeholders are and ensuring that they are all involved and represented from the beginning of a project is crucial to success.',
        fields: ['whoIsInvolved'],
      },
      {
        name: 'Scientific research',
        description:
          'The existence of scientific literature often reveals a great deal about the results and monitoring capacity.',
        fields: ['scientificResearchAssociatedWithProject'],
      },
    ],
  },
  {
    name: 'Social',
    description:
      'When society, especially local communities, benefits from reforestation projects, forests are more likely to be protected over the long term.',
    image: '/images/explore-guidance-context.jpg',
    category: SOCIAL_CATEGORY,
    steps: [
      {
        name: 'Community involvement',
        description:
          'Researchers have found that conflicting goals between local communities and project managers were the most common cause of project failures and problems.',
        fields: ['hasCommunityInvolvement'],
      },
      {
        name: 'Gender component',
        description:
          'Research indicates that projects that involve women and address gender from the planning and design stages have better outcomes.',
        fields: ['hasGenderComponent'],
      },
      {
        name: 'News coverage',
        description:
          'The existence of news coverage about a project can reveal additional insight into a project’s reputation and results.',
        fields: ['newsArticlesAssociatedWithProject'],
      },
    ],
  },
];
