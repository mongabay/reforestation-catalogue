import React from 'react';
import { motion } from 'framer-motion';

import './style.scss';
import { ProjectViewerProps } from './types';
import ProjectChart from '../chart';
import { UNREPORTED_TEXT } from './constants';
import {
  CATEGORIES,
  CONTEXT_CATEGORY,
  ECOLOGICAL_CATEGORY,
  ECONOMIC_CATEGORY,
  INSTITUTIONAL_CATEGORY,
  SOCIAL_CATEGORY,
} from 'services/catalogue';
import { FilterTypes } from 'types';
import Pill from 'components/pill/component';

const ProjectViewer: React.FC<ProjectViewerProps> = ({ project }: ProjectViewerProps) => {
  console.log('project', project);

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
              <a className="-primary" href="">
                Suggest Page Edits
              </a>
            </motion.div>
          </div>
          <div className="right-container">
            {/* ----------------------CONTEXT --------------------- */}
            <div className="context category-section">
              <h5>Context</h5>
              <div className="field">
                <span className="-bold property-label">Size of project (ha):</span>
                {project.sizeOfProjectHa ? project.sizeOfProjectHa : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">Trees planted (number):</span>
                {project.treesPlantedNumber ? project.treesPlantedNumber : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">Primary objective/purpose:</span>
                {project.primaryObjectivePurpose
                  ? project.primaryObjectivePurpose
                  : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">Approach:</span>
                {project.approach ? project.approach : UNREPORTED_TEXT}
              </div>
              <div className="field">
                <span className="-bold property-label">Type of follow up:</span>
                {project.typeOfFollowUp ? project.typeOfFollowUp : UNREPORTED_TEXT}
              </div>
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
              <h5>Ecological</h5>
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
              <h5>Economic</h5>
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
              <h5>Social</h5>
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
              <h5>Institutional</h5>
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
