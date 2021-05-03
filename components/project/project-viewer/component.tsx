import React from 'react';
import { motion } from 'framer-motion';
import * as d3 from 'd3';

// components
import Pill from 'components/pill/component';
import CategoryInfoTooltip from 'components/category/info-tooltip/component';
import ProjectChart from 'components/project/chart';

// utils
import { getCategoryInfoModalText } from 'utils/category';

// services
import {
  CATEGORIES,
  CONTEXT_CATEGORY,
  ECOLOGICAL_CATEGORY,
  ECONOMIC_CATEGORY,
  INSTITUTIONAL_CATEGORY,
  SOCIAL_CATEGORY,
} from 'services/catalogue';

import { ProjectViewerProps } from './types';

// constants
import { UNREPORTED_TEXT } from './constants';

import { FilterTypes } from 'types';

const ProjectViewer: React.FC<ProjectViewerProps> = ({
  project,
  categoriesConfig,
  suggestPageEditsURL,
}: ProjectViewerProps) => {
  const getReportedFieldsForCategory = (category, reported) => {
    return (
      <div className="pills-container">
        {CATEGORIES.find(c => c.id === category)
          .fields.filter(
            field =>
              field.type === FilterTypes.Boolean &&
              (reported ? project[field.id] : !project[field.id])
          )
          .map(f => (
            <Pill
              key={`pill-${f.id}`}
              filter={{ ...f, propertyName: f.id, value: reported }}
              linkMode={true}
            />
          ))}
      </div>
    );
  };

  const getContextDynamicText = project => {
    const projectArea = project.sizeOfProjectHa && d3.format('.4s')(project.sizeOfProjectHa);
    const treesPlanted = project.treesPlantedNumber && d3.format('.4s')(project.treesPlantedNumber);
    const approach = project.approach;
    const severalApproaches = approach && approach.indexOf(',') > 0;
    const primaryObjectivePurpose = project.primaryObjectivePurpose;
    const severalObjPurposes = primaryObjectivePurpose && primaryObjectivePurpose.indexOf(',') > 0;
    const typeOfFollowUp = project.typeOfFollowUp;
    const severalTypesOfFollowUp = typeOfFollowUp && typeOfFollowUp.indexOf(',') > 0;

    return (
      <>
        <span>
          {/* NUMBER OF TREES AND SIZE */}
          {treesPlanted && projectArea && (
            <span>
              {`A total of `}
              <span className="-bold">{treesPlanted}</span>
              {` trees have been planted as part of the project, spanning an area of `}
              <span className="-bold">{projectArea}</span>
              {` hectares. `}
            </span>
          )}
          {treesPlanted && !projectArea && (
            <span>
              {`While there is no reported information on the size of the reforestation, a total of `}
              <span className="-bold">{treesPlanted}</span>
              {` trees have been planted as part of the project. `}
            </span>
          )}
          {!treesPlanted && projectArea && (
            <span>
              {`The project covers an area of `}
              <span className="-bold">{projectArea}</span>
              {` hectares, but does not report the total number of trees planted. `}
            </span>
          )}
          {!treesPlanted && !projectArea && (
            <span>{`The project doest not report the total area nor the number of trees planted. `}</span>
          )}
        </span>
        <span>
          {/* PRIMARY OBJECTIVE/PURPOSE */}
          {primaryObjectivePurpose && !severalObjPurposes && (
            <span>
              {`The primary objective/purpose of the project is: `}
              <span className="-bold">{primaryObjectivePurpose}</span>
              {` .`}
            </span>
          )}
          {primaryObjectivePurpose && severalObjPurposes && (
            <span>
              {`The primary objectives/purposes of the project are: `}
              <span className="-bold">
                {primaryObjectivePurpose}
                {`. `}
              </span>
            </span>
          )}
          {!primaryObjectivePurpose && approach && (
            <span>{`The primary objective/purpose of the project hasn't been reported. `}</span>
          )}
        </span>
        <span>
          {/* APPROACH */}
          {approach && !severalApproaches && (
            <span>
              {`This project follows a`}
              {approach.startsWith('a') ? 'n ' : ' '}
              <span className="-bold">{approach}</span>
              {` approach. `}
            </span>
          )}
          {approach && severalApproaches && (
            <span>
              {`This project follows the following approaches: `}
              <span className="-bold">
                {approach}
                {`. `}
              </span>
            </span>
          )}
          {!approach && primaryObjectivePurpose && (
            <span>{`The approach for this project hasn't been reported. `}</span>
          )}
        </span>
        {!primaryObjectivePurpose && !approach && (
          <span>{`This project doest not report its approach nor its primary objective/purpose. `}</span>
        )}
        {/* Type of follow up */}
        <span>
          {typeOfFollowUp && !severalApproaches && (
            <span>
              {`This project has the following follow up type: `}
              <span className="-bold">{typeOfFollowUp}</span>
              {`.`}
            </span>
          )}
          {typeOfFollowUp && severalApproaches && (
            <span>
              {`This project has the following follow up types associated to it: `}
              <span className="-bold">{typeOfFollowUp}</span>
              {`.`}
            </span>
          )}
          {!typeOfFollowUp && (
            <span>{`There isn't any type of follow up reported for this project. `}</span>
          )}
        </span>
      </>
    );
  };

  return (
    <div className="c-project-viewer">
      <motion.div className="title-banner" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>{project?.projectName}</h1>
      </motion.div>
      {project && (
        <div className="main-container">
          <div className="left-container">
            <ProjectChart project={project} cardMode={false} />
            <motion.div
              className="text-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="lead-organization">{project?.leadOrganization}</div>
              <div className="date">
                {project?.startYear} - {project?.endYear}
              </div>
              <div className="country">{project?.country}</div>
            </motion.div>
            <motion.div className="buttons">
              <a
                className="-secondary"
                href={project?.projectOrgUrl}
                target="_blank"
                rel="noreferrer"
              >
                Project Website
              </a>
              <a className="-primary" href={suggestPageEditsURL} target="_blank" rel="noreferrer">
                Suggest Page Edits
              </a>
            </motion.div>
          </div>
          <div className="right-container">
            {/* ----------------------CONTEXT --------------------- */}
            <div className="context category-section">
              <div className="category-title">
                <h5 className="category-title-text">Context</h5>
                <CategoryInfoTooltip
                  text={getCategoryInfoModalText(CONTEXT_CATEGORY, categoriesConfig)}
                />
              </div>
              <div className="dynamic-text">{getContextDynamicText(project)}</div>
              <div className="reported-info">
                <span className="-bold property-label">Reported information:</span>
                {getReportedFieldsForCategory(CONTEXT_CATEGORY, true)}
              </div>
              <div className="non-reported-info">
                <span className="-bold property-label">Non-reported information:</span>
                {getReportedFieldsForCategory(CONTEXT_CATEGORY, false)}
              </div>
            </div>
            {/* ----------------------ECOLOGICAL --------------------- */}
            <div className="ecological category-section">
              <div className="category-title">
                <h5 className="category-title-text">Ecological</h5>
                <CategoryInfoTooltip
                  text={getCategoryInfoModalText(ECOLOGICAL_CATEGORY, categoriesConfig)}
                />
              </div>
              <div className="field">
                <span className="-bold property-label">Forest type:</span>
                {project.forestType ? project.forestType : UNREPORTED_TEXT}
              </div>
              <div className="reported-info">
                <span className="-bold property-label">Reported information:</span>
                {getReportedFieldsForCategory(ECOLOGICAL_CATEGORY, true)}
              </div>
              <div className="non-reported-info">
                <span className="-bold property-label">Non-reported information:</span>
                {getReportedFieldsForCategory(ECOLOGICAL_CATEGORY, false)}
              </div>
            </div>
            {/* ----------------------ECONOMIC --------------------- */}
            <div className="economic category-section">
              <div className="category-title">
                <h5 className="category-title-text">Economic</h5>
                <CategoryInfoTooltip
                  text={getCategoryInfoModalText(ECONOMIC_CATEGORY, categoriesConfig)}
                />
              </div>
              <div className="field">
                <span className="-bold property-label">Name Org/Donor:</span>
                {project.nameOrgDonor ? project.nameOrgDonor : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">Financial model:</span>
                {project.financialModel ? project.financialModel : UNREPORTED_TEXT}
              </div>
              <div className="reported-info">
                <span className="-bold property-label">Reported information:</span>
                {getReportedFieldsForCategory(ECONOMIC_CATEGORY, true)}
              </div>
              <div className="non-reported-info">
                <span className="-bold property-label">Non-reported information:</span>
                {getReportedFieldsForCategory(ECONOMIC_CATEGORY, false)}
              </div>
            </div>
            {/* ----------------------SOCIAL --------------------- */}
            <div className="social category-section">
              <div className="category-title">
                <h5 className="category-title-text">Social</h5>
                <CategoryInfoTooltip
                  text={getCategoryInfoModalText(SOCIAL_CATEGORY, categoriesConfig)}
                />
              </div>
              <div className="reported-info">
                <span className="-bold property-label">Reported information:</span>
                {getReportedFieldsForCategory(SOCIAL_CATEGORY, true)}
              </div>
              <div className="non-reported-info">
                <span className="-bold property-label">Non-reported information:</span>
                {getReportedFieldsForCategory(SOCIAL_CATEGORY, false)}
              </div>
            </div>
            {/* ----------------------INSTITUTIONAL --------------------- */}
            <div className="institutional category-section">
              <div className="category-title">
                <h5 className="category-title-text">Institutional</h5>
                <CategoryInfoTooltip
                  text={getCategoryInfoModalText(INSTITUTIONAL_CATEGORY, categoriesConfig)}
                />
              </div>
              <div className="field">
                <span className="-bold property-label">Lead organization:</span>
                {project.leadOrganization ? project.leadOrganization : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">Organization type:</span>
                {project.organizationType ? project.organizationType : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">{`Who's involved:`}</span>
                {project.whoIsInvolved ? project.whoIsInvolved : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">Partner name:</span>
                {project.partnerName ? project.partnerName : UNREPORTED_TEXT}
              </div>
              <div className="reported-info">
                <span className="-bold property-label">Reported information:</span>
                {getReportedFieldsForCategory(INSTITUTIONAL_CATEGORY, true)}
              </div>
              <div className="non-reported-info">
                <span className="-bold property-label">Non-reported information:</span>
                {getReportedFieldsForCategory(INSTITUTIONAL_CATEGORY, false)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;
