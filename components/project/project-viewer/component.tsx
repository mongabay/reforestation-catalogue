import React from 'react';
import { motion } from 'framer-motion';

import './style.scss';
import { ProjectViewerProps } from './types';
import ProjectChart from '../chart/component';

const ProjectViewer: React.FC<ProjectViewerProps> = ({ project }: ProjectViewerProps) => {
  return (
    <div className="c-project-viewer">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {project?.projectName}
      </motion.h1>
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
              <button className="btn btn-secondary">Project Website</button>
              <button className="btn btn-primary">Suggest Page Edits</button>
            </motion.div>
          </div>
          <div className="right-container">
            <div className="context category-section">
              <h5>Context</h5>
              <p>
                Context Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,
              </p>
            </div>
            <div className="ecological category-section">
              <h5>Ecological</h5>
              <p>
                Context Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,
              </p>
            </div>
            <div className="economic category-section">
              <h5>Economic</h5>
              <p>
                Context Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,
              </p>
            </div>
            <div className="social category-section">
              <h5>Social</h5>
              <p>
                Context Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,
              </p>
            </div>
            <div className="institutional category-section">
              <h5>Institutional</h5>
              <p>
                Context Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;
