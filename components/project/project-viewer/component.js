import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProjectByNumber } from 'services/catalogue';

import './style.scss';

function ProjectViewer({ project }) {
  return (
    <div className="c-project-viewer">
      {project && (
        <>
          <h1>{project.projectName}</h1>
        </>
      )}
    </div>
  );
}

ProjectViewer.propTypes = { project: PropTypes.object.isRequired };

export default ProjectViewer;
