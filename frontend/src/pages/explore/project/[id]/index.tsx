import React, { FC, useState } from 'react';

import Link from 'next/link';

import * as d3 from 'd3';
import { GetServerSideProps } from 'next';

import { useField, useFormatFieldValue } from 'hooks/fields';
import { fetchProject } from 'hooks/projects';

import Breadcrumbs from 'components/breadcrumbs';
import Button from 'components/button';
import Pill from 'components/filter-pill';
import GlossaryModal from 'components/glossary-modal';
import Head from 'components/head';
import InfoTooltip from 'components/info-tooltip';
import LayoutContainer from 'components/layout-container';
import ProjectChart from 'components/project-chart';
import ProjectLinksModal from 'components/project-links-modal';
import Tabs, { TabItem } from 'components/tabs';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { Categories, Field, FilterTypes, PageComponent, Project } from 'types';
import { toTitleCase } from 'utils/misc';

import { CATEGORIES } from 'services/catalog';

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

interface ReportedCategoryFieldProps {
  category: Categories;
  reported: boolean;
  project: Project;
}

const ReportedCategoryField: FC<ReportedCategoryFieldProps> = ({ category, reported, project }) => {
  const booleanFields = CATEGORIES.find((c) => c.id === category).fields.filter(
    (field) =>
      field.type === FilterTypes.Boolean && (reported ? project[field.id] : !project[field.id])
  );

  if (booleanFields.length === 0) {
    return <>None</>;
  }

  return (
    <div className="flex flex-wrap gap-4 mt-3 md:gap-5">
      {booleanFields.map((field) => (
        <Pill key={field.id} filter={{ field: field.id, value: reported }} link />
      ))}
    </div>
  );
};

interface FieldValueProps {
  fieldId: Field['id'];
  value: string | number | boolean | number[];
}

const FieldValue: FC<FieldValueProps> = ({ fieldId, value }) => {
  const field = useField(fieldId);
  const formattedValue = useFormatFieldValue(field, value);

  if (value === null || value === undefined) {
    return <>Unreported</>;
  }

  if (!field) {
    return <>{value.toString()}</>;
  }

  return <>{formattedValue}</>;
};

interface DynamicTextProps {
  project: Project;
}

const DynamicText: FC<DynamicTextProps> = ({ project }) => {
  const projectArea = project.size_of_project_ha && d3.format('.2s')(project.size_of_project_ha);
  const treesPlanted =
    project.trees_planted_number && d3.format('.2s')(project.trees_planted_number);
  const approach = project.approach;
  const primaryObjectivePurpose = project.primary_objective_purpose;
  const typeOfFollowUp = project.type_of_follow_up;

  return (
    <>
      <>
        {/* NUMBER OF TREES AND SIZE */}
        {treesPlanted && projectArea && (
          <>
            A total of <span className="font-bold">{treesPlanted}</span> trees have been planted as
            part of the project, spanning an area of{' '}
            <span className="font-bold">{projectArea}</span> hectares.{' '}
          </>
        )}
        {treesPlanted && !projectArea && (
          <>
            While there is no reported information on the size of the reforestation, a total of{' '}
            <span className="font-bold">{treesPlanted}</span> trees have been planted as part of the
            project.{' '}
          </>
        )}
        {!treesPlanted && projectArea && (
          <>
            The project covers an area of <span className="font-bold">{projectArea}</span> hectares,
            but does not report the total number of trees planted.{' '}
          </>
        )}
        {!treesPlanted && !projectArea && (
          <>The project doest not report the total area nor the number of trees planted. </>
        )}
      </>
      <>
        {/* PRIMARY OBJECTIVE/PURPOSE */}
        {primaryObjectivePurpose?.length === 1 && (
          <>
            The primary objective/purpose of the project is:{' '}
            <div className="inline font-bold">
              <FieldValue fieldId="primary_objective_purpose" value={primaryObjectivePurpose} />
            </div>
            .{' '}
          </>
        )}
        {primaryObjectivePurpose?.length > 1 && (
          <>
            The primary objectives/purposes of the project are:{' '}
            <div className="inline font-bold">
              <FieldValue fieldId="primary_objective_purpose" value={primaryObjectivePurpose} />
            </div>
            .{' '}
          </>
        )}
        {!primaryObjectivePurpose?.length && approach?.length > 0 && (
          <>The primary objective/purpose of the project {"hasn't"} been reported. </>
        )}
      </>
      <span>
        {/* APPROACH */}
        {approach?.length === 1 && (
          <>
            This project follows a{' '}
            <div className="inline font-bold">
              <FieldValue fieldId="approach" value={approach} />
            </div>{' '}
            approach.{' '}
          </>
        )}
        {approach?.length > 1 && (
          <>
            This project follows the following approaches:{' '}
            <div className="inline font-bold">
              <FieldValue fieldId="approach" value={approach} />
            </div>
            .{' '}
          </>
        )}
        {!approach?.length && !!primaryObjectivePurpose?.length && (
          <>The approach for this project {"hasn't"} been reported. </>
        )}
      </span>
      {!primaryObjectivePurpose?.length && !approach?.length && (
        <>This project doest not report its approach nor its primary objective/purpose. </>
      )}
      {/* Type of follow up */}
      <>
        {typeOfFollowUp?.length > 0 && !(approach?.length > 1) && (
          <>
            This project has the following follow up type:{' '}
            <div className="inline font-bold">
              <FieldValue fieldId="type_of_follow_up" value={typeOfFollowUp} />
            </div>
            .
          </>
        )}
        {typeOfFollowUp?.length > 0 && approach?.length > 1 && (
          <>
            This project has the following follow up types associated to it:{' '}
            <div className="inline font-bold">
              <FieldValue fieldId="type_of_follow_up" value={typeOfFollowUp} />
            </div>
            .
          </>
        )}
        {!typeOfFollowUp?.length && (
          <>There {"isn't"} any type of follow up reported for this project. </>
        )}
      </>
    </>
  );
};

export const ProjectPage: PageComponent<{ project: Project }, StaticPageLayoutProps> = ({
  project,
}) => {
  const [showGlossaryModal, setShowGlossaryModal] = useState(false);
  const [showProjectLinksModal, setShowProjectLinksModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Categories>(Categories.Context);

  return (
    <div className="relative pt-5 pb-12">
      <LayoutContainer>
        <Head title={project.project_name} />
        <GlossaryModal open={showGlossaryModal} onDismiss={() => setShowGlossaryModal(false)} />
        <ProjectLinksModal
          project={project}
          open={showProjectLinksModal}
          onDismiss={() => setShowProjectLinksModal(false)}
        />
        <div className="fixed right-0 origin-bottom-right -rotate-90 md:absolute top-32 md:top-0">
          <Button
            className="rounded-b-none rounded-t-md"
            onClick={() => setShowGlossaryModal(true)}
          >
            <span className="text-base font-semibold">Glossary</span>
          </Button>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex justify-center flex-shrink-0 mt-12 md:block md:max-w-[150px] md:w-full">
            <ProjectChart
              project={project}
              highlightedCategory={activeCategory}
              highlightedCategoryStroke={4}
            />
          </div>
          <div className="flex-grow md:ml-7">
            <Breadcrumbs
              items={[
                { label: 'Projects results', url: '/explore' },
                { label: project.project_name },
              ]}
            />
            <div className="pt-8">
              <h1 className="max-w-2xl font-serif text-3xl font-bold text-green">
                {project.project_name}
              </h1>
              <div className="mt-4">
                {!!project.lead_organization && <div>{project.lead_organization}</div>}
                {(!!project.start_year || !!project.end_year) && (
                  <div>
                    {project.start_year ?? '−'} - {project.end_year ?? '−'}
                  </div>
                )}
                {!!project.country && <div>{project.country}</div>}
              </div>
              {!!project.project_org_url && (
                <Link href={project.project_org_url}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block inline-block mt-4 text-blue hover:underline focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-blue"
                  >
                    {project.project_org_url.replace(/^https?:\/\//, '').split('/')[0]}
                  </a>
                </Link>
              )}
            </div>
            <div className="mt-7">
              <div className="flex flex-col gap-4 md:flex-row md:gap-11">
                {project.project_links.length > 0 && (
                  <Button
                    theme="secondary-green"
                    className="justify-center min-w-[168px]"
                    onClick={() => setShowProjectLinksModal(true)}
                  >
                    Project Links
                  </Button>
                )}
                <Button
                  to={`/explore/project/${project.id}/edit`}
                  className="justify-center min-w-[168px]"
                >
                  Suggest Page Edits
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse mt-16 md:flex-row">
          <div className="flex-shrink-0 md:w-36" />
          <div className="flex-grow md:ml-7">
            <Tabs
              aria-label="Categories"
              selectedKey={activeCategory}
              onChange={(category) => setActiveCategory(category as Categories)}
            >
              <TabItem
                key={Categories.Context}
                title={
                  <span className="whitespace-nowrap">
                    {toTitleCase(Categories.Context)}
                    <InfoTooltip
                      text={
                        CATEGORIES.find((category) => category.id === Categories.Context)
                          ?.description
                      }
                      className="ml-1.5"
                      iconClassName="w-3.5 h-3.5"
                    />
                  </span>
                }
                textValue={toTitleCase(Categories.Context)}
              >
                <div className="mt-8 md:mt-12">
                  <DynamicText project={project} />
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Context}
                      reported={true}
                      project={project}
                    />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Context}
                      reported={false}
                      project={project}
                    />
                  </div>
                </div>
              </TabItem>
              <TabItem
                key={Categories.Ecological}
                title={
                  <span className="whitespace-nowrap">
                    {toTitleCase(Categories.Ecological)}
                    <InfoTooltip
                      text={
                        CATEGORIES.find((category) => category.id === Categories.Ecological)
                          ?.description
                      }
                      className="ml-1.5"
                      iconClassName="w-3.5 h-3.5"
                    />
                  </span>
                }
                textValue={toTitleCase(Categories.Ecological)}
              >
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Forest type:</span>{' '}
                    <FieldValue fieldId="forest_type" value={project.forest_type} />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Ecological}
                      reported={true}
                      project={project}
                    />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Ecological}
                      reported={false}
                      project={project}
                    />
                  </div>
                </div>
              </TabItem>
              <TabItem
                key={Categories.Economic}
                title={
                  <span className="whitespace-nowrap">
                    {toTitleCase(Categories.Economic)}
                    <InfoTooltip
                      text={
                        CATEGORIES.find((category) => category.id === Categories.Economic)
                          ?.description
                      }
                      className="ml-1.5"
                      iconClassName="w-3.5 h-3.5"
                    />
                  </span>
                }
                textValue={toTitleCase(Categories.Economic)}
              >
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Name Org/Donor:</span>{' '}
                    <FieldValue fieldId="name_org_donor" value={project.name_org_donor} />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Financial model:</span>{' '}
                    <FieldValue fieldId="financial_model" value={project.financial_model} />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Economic}
                      reported={true}
                      project={project}
                    />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Economic}
                      reported={false}
                      project={project}
                    />
                  </div>
                </div>
              </TabItem>
              <TabItem
                key={Categories.Institutional}
                title={
                  <span className="whitespace-nowrap">
                    {toTitleCase(Categories.Institutional)}
                    <InfoTooltip
                      text={
                        CATEGORIES.find((category) => category.id === Categories.Institutional)
                          ?.description
                      }
                      className="ml-1.5"
                      iconClassName="w-3.5 h-3.5"
                    />
                  </span>
                }
                textValue={toTitleCase(Categories.Institutional)}
              >
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Lead organization:</span>{' '}
                    <FieldValue fieldId="lead_organization" value={project.lead_organization} />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Organization type:</span>{' '}
                    <FieldValue fieldId="organization_type" value={project.organization_type} />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">{`Who's involved:`}</span>{' '}
                    <FieldValue fieldId="who_is_involved" value={project.who_is_involved} />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Partner name:</span>{' '}
                    <FieldValue fieldId="partner_name" value={project.partner_name} />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Institutional}
                      reported={true}
                      project={project}
                    />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Institutional}
                      reported={false}
                      project={project}
                    />
                  </div>
                </div>
              </TabItem>
              <TabItem
                key={Categories.Social}
                title={
                  <span className="whitespace-nowrap">
                    {toTitleCase(Categories.Social)}
                    <InfoTooltip
                      text={
                        CATEGORIES.find((category) => category.id === Categories.Social)
                          ?.description
                      }
                      className="ml-1.5"
                      iconClassName="w-3.5 h-3.5"
                    />
                  </span>
                }
                textValue={toTitleCase(Categories.Social)}
              >
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Social}
                      reported={true}
                      project={project}
                    />
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>{' '}
                    <ReportedCategoryField
                      category={Categories.Social}
                      reported={false}
                      project={project}
                    />
                  </div>
                </div>
              </TabItem>
            </Tabs>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default ProjectPage;
