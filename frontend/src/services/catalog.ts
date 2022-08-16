import axios from 'axios';

import { Categories, Category, FilterModes, FilterTypes, Project } from 'types';

export const getCatalogData = (): Promise<Project[]> =>
  fetch(`${process.env.NEXT_PUBLIC_MONGABAY_DATA_URL}/mongabay-data.json`).then((res) =>
    res.json()
  );
export const CATEGORIES: Category[] = [
  {
    id: Categories.Context,
    label: 'Context',
    description:
      'Does the project disclose basic information about its size, location, and duration?',
    fields: [
      {
        id: 'start_year',
        label: 'Start year',
        type: FilterTypes.Year,
        mode: FilterModes.GreaterOrEqualThan,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'end_year',
        label: 'End year',
        type: FilterTypes.Year,
        mode: FilterModes.LessOrEqualThan,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'has_explicit_location',
        label: 'Has a explicit location',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'has_public_reports',
        label: 'Has public reports',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: true,
      },
      {
        id: 'has_justification_for_approach',
        label: 'Has justification for approach',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'country',
        label: 'Country',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: true,
        enum: false,
      },
      {
        id: 'size_of_project_ha',
        label: 'Size of project in ha',
        type: FilterTypes.Number,
        mode: FilterModes.GreaterOrEqualThan,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'primary_objective_purpose',
        label: 'Primary objectives/purposes',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: false,
        enum: true,
      },
      {
        id: 'approach',
        label: 'Approach',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: false,
        enum: true,
      },
      {
        id: 'type_of_follow_up',
        label: 'Type of follow up',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: false,
        enum: true,
      },
    ],
  },
  {
    id: Categories.Ecological,
    label: 'Ecological',
    description:
      'Does the project disclose what kinds of trees it will plant and address threats to a specified ecosystem?',
    fields: [
      {
        id: 'forest_type',
        label: 'Forest type',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
        enum: true,
      },
      {
        id: 'fire_prevention',
        label: 'Fire prevention',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'addresses_known_threats',
        label: 'Addresses known threats',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'discloses_species_used',
        label: 'Discloses species used',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
    ],
  },
  {
    id: Categories.Economic,
    label: 'Economic',
    description: 'How is the project funded and how does it support local communities?',
    fields: [
      {
        id: 'name_org_donor',
        label: 'Name Org/Donor',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: true,
        enum: false,
      },
      {
        id: 'identify_deforestation_driver',
        label: 'Identifies deforestation driver',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'local_seedling_nurseries',
        label: 'Local seedling nurseries',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'financial_model',
        label: 'Financial model',
        type: FilterTypes.String,
        mode: FilterModes.Includes,
        hidden: false,
        impactScore: true,
        enum: true,
      },
      {
        id: 'follow_up_disclosed',
        label: 'Follow up disclosed',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
    ],
  },
  {
    id: Categories.Institutional,
    label: 'Institutional',
    description:
      'What kind of organization is managing the project? Is there a research component?',
    fields: [
      {
        id: 'organization_type',
        label: 'Organization type',
        type: FilterTypes.String,
        mode: FilterModes.Includes,
        hidden: false,
        impactScore: true,
        enum: true,
      },
      {
        id: 'scientific_research_associated_with_project',
        label: 'Scientific research associated with project',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'has_project_partners',
        label: 'Has project partners',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: true,
      },
      {
        id: 'partner_name',
        label: 'Partner name',
        type: FilterTypes.String,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: true,
        enum: false,
      },
      {
        id: 'who_is_involved',
        label: 'Who is involved',
        type: FilterTypes.String,
        mode: FilterModes.Includes,
        hidden: false,
        impactScore: false,
        enum: true,
      },
    ],
  },
  {
    id: Categories.Social,
    label: 'Social',
    description: 'Who is participating and who is benefitting?',
    fields: [
      {
        id: 'has_community_involvement',
        label: 'Has community involvement',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'has_gender_component',
        label: 'Has gender component',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: false,
        impactScore: true,
      },
      {
        id: 'news_articles_associated_with_project',
        label: 'Has news articles associated with project',
        type: FilterTypes.Boolean,
        mode: FilterModes.Exact,
        hidden: true,
        impactScore: true,
      },
    ],
  },
];

export const SORT_OPTIONS = CATEGORIES.map((c) => ({ label: c.label, value: c.id }));

export const getCategoryByID = (id) => CATEGORIES.find((c) => c.id === id);
export const getFieldByID = (id) => {
  for (let i = 0; i < CATEGORIES.length; i++) {
    const found = CATEGORIES[i].fields.find((f) => f.id === id);
    if (found) {
      return found;
    }
  }
  return null;
};
