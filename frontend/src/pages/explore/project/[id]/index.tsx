import React, { useState } from 'react';

import Link from 'next/link';

import * as d3 from 'd3';
import { GetServerSideProps } from 'next';

import { fetchProject } from 'hooks/projects';

import Breadcrumbs from 'components/breadcrumbs';
import Button from 'components/button';
import Pill from 'components/filter-pill';
import GlossaryModal from 'components/glossary-modal';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectChart, { ProjectChartSize } from 'components/project-chart';
import ProjectLinksModal from 'components/project-links-modal';
import Tabs, { TabItem } from 'components/tabs';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { Categories, FilterTypes, PageComponent, Project } from 'types';
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

const getContextDynamicText = (project: Project) => {
  const projectArea = project.size_of_project_ha && d3.format('.4s')(project.size_of_project_ha);
  const treesPlanted =
    project.trees_planted_number && d3.format('.4s')(project.trees_planted_number);
  const approach = project.approach;
  const primaryObjectivePurpose = project.primary_objective_purpose;
  const typeOfFollowUp = project.type_of_follow_up;

  return (
    <>
      <span>
        {/* NUMBER OF TREES AND SIZE */}
        {treesPlanted && projectArea && (
          <span>
            {`A total of `}
            <span className="font-bold">{treesPlanted}</span>
            {` trees have been planted as part of the project, spanning an area of `}
            <span className="font-bold">{projectArea}</span>
            {` hectares. `}
          </span>
        )}
        {treesPlanted && !projectArea && (
          <span>
            {`While there is no reported information on the size of the reforestation, a total of `}
            <span className="font-bold">{treesPlanted}</span>
            {` trees have been planted as part of the project. `}
          </span>
        )}
        {!treesPlanted && projectArea && (
          <span>
            {`The project covers an area of `}
            <span className="font-bold">{projectArea}</span>
            {` hectares, but does not report the total number of trees planted. `}
          </span>
        )}
        {!treesPlanted && !projectArea && (
          <span>{`The project doest not report the total area nor the number of trees planted. `}</span>
        )}
      </span>
      <span>
        {/* PRIMARY OBJECTIVE/PURPOSE */}
        {primaryObjectivePurpose?.length === 1 && (
          <span>
            {`The primary objective/purpose of the project is: `}
            <span className="font-bold">{primaryObjectivePurpose[0]}</span>
            {` .`}
          </span>
        )}
        {primaryObjectivePurpose?.length > 1 && (
          <span>
            {`The primary objectives/purposes of the project are: `}
            <span className="font-bold">
              {primaryObjectivePurpose.join(', ')}
              {`. `}
            </span>
          </span>
        )}
        {!primaryObjectivePurpose?.length && approach?.length > 0 && (
          <span>{`The primary objective/purpose of the project hasn't been reported. `}</span>
        )}
      </span>
      <span>
        {/* APPROACH */}
        {approach?.length === 1 && (
          <span>
            {`This project follows a`}
            {approach[0].startsWith('a') ? 'n ' : ' '}
            <span className="font-bold">{approach[0]}</span>
            {` approach. `}
          </span>
        )}
        {approach?.length > 1 && (
          <span>
            {`This project follows the following approaches: `}
            <span className="font-bold">
              {approach.join(', ')}
              {`. `}
            </span>
          </span>
        )}
        {!approach?.length && !!primaryObjectivePurpose?.length && (
          <span>{`The approach for this project hasn't been reported. `}</span>
        )}
      </span>
      {!primaryObjectivePurpose?.length && !approach?.length && (
        <span>{`This project doest not report its approach nor its primary objective/purpose. `}</span>
      )}
      {/* Type of follow up */}
      <span>
        {typeOfFollowUp?.length > 0 && !(approach?.length > 1) && (
          <span>
            {`This project has the following follow up type: `}
            <span className="font-bold">{typeOfFollowUp.join(', ')}</span>
            {`.`}
          </span>
        )}
        {typeOfFollowUp?.length > 0 && approach?.length > 1 && (
          <span>
            {`This project has the following follow up types associated to it: `}
            <span className="font-bold">{typeOfFollowUp.join(', ')}</span>
            {`.`}
          </span>
        )}
        {!typeOfFollowUp?.length && (
          <span>{`There isn't any type of follow up reported for this project. `}</span>
        )}
      </span>
    </>
  );
};

export const ProjectPage: PageComponent<{ project: Project }, StaticPageLayoutProps> = ({
  project,
}) => {
  const [showGlossaryModal, setShowGlossaryModal] = useState(false);
  const [showProjectLinksModal, setShowProjectLinksModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Categories>(Categories.Context);

  const getReportedFieldsForCategory = (category: Categories, reported: boolean) => {
    const fields = CATEGORIES.find((c) => c.id === category).fields.filter(
      (field) =>
        field.type === FilterTypes.Boolean && (reported ? project[field.id] : !project[field.id])
    );

    if (fields.length === 0) {
      return <>&nbsp;None</>;
    }

    return (
      <div className="flex flex-wrap gap-4 mt-3 md:gap-5">
        {fields.map((field) => (
          <Pill key={field.id} filter={{ field: field.id, value: reported }} link />
        ))}
      </div>
    );
  };

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
          <div className="flex justify-center flex-shrink-0 mt-12 md:block">
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
                    className="block mt-4 text-blue hover:underline"
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
                    className="justify-center md:justify-start"
                    onClick={() => setShowProjectLinksModal(true)}
                  >
                    Project Links
                  </Button>
                )}
                <Button
                  to={`/explore/project/${project.id}/edit`}
                  className="justify-center md:justify-start"
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
              <TabItem key={Categories.Context} title={toTitleCase(Categories.Context)}>
                <div className="mt-8 md:mt-12">
                  <p>{getContextDynamicText(project)}</p>
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>
                    {getReportedFieldsForCategory(Categories.Context, true)}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>
                    {getReportedFieldsForCategory(Categories.Context, false)}
                  </div>
                </div>
              </TabItem>
              <TabItem key={Categories.Ecological} title={toTitleCase(Categories.Ecological)}>
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Forest type:</span>{' '}
                    {project.forest_type ? project.forest_type.join(', ') : 'Unreported'}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>
                    {getReportedFieldsForCategory(Categories.Ecological, true)}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>
                    {getReportedFieldsForCategory(Categories.Ecological, false)}
                  </div>
                </div>
              </TabItem>
              <TabItem key={Categories.Economic} title={toTitleCase(Categories.Economic)}>
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Name Org/Donor:</span>{' '}
                    {project.name_org_donor ? project.name_org_donor : 'Unreported'}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Financial model:</span>{' '}
                    {project.financial_model?.length > 0
                      ? project.financial_model.join(', ')
                      : 'Unreported'}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>
                    {getReportedFieldsForCategory(Categories.Economic, true)}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>
                    {getReportedFieldsForCategory(Categories.Economic, false)}
                  </div>
                </div>
              </TabItem>
              <TabItem key={Categories.Institutional} title={toTitleCase(Categories.Institutional)}>
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Lead organization:</span>{' '}
                    {project.lead_organization ? project.lead_organization : 'Unreported'}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Organization type:</span>{' '}
                    {project.organization_type ? project.organization_type : 'Unreported'}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">{`Who's involved:`}</span>{' '}
                    {project.who_is_involved ? project.who_is_involved.join(', ') : 'Unreported'}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Partner name:</span>{' '}
                    {project.partner_name ? project.partner_name : 'Unreported'}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Reported information:</span>
                    {getReportedFieldsForCategory(Categories.Institutional, true)}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>
                    {getReportedFieldsForCategory(Categories.Institutional, false)}
                  </div>
                </div>
              </TabItem>
              <TabItem key={Categories.Social} title={toTitleCase(Categories.Social)}>
                <div className="mt-8 md:mt-12">
                  <div>
                    <span className="font-semibold">Reported information:</span>
                    {getReportedFieldsForCategory(Categories.Social, true)}
                  </div>
                  <div className="mt-8">
                    <span className="font-semibold">Non-reported information:</span>
                    {getReportedFieldsForCategory(Categories.Social, false)}
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
