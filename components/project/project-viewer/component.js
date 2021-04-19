import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProjectByNumber } from 'services/catalogue';

import './style.scss';

function ProjectViewer({ id }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      setProject(getProjectByNumber(id));
    }
  }, [id]);

  return (
    <div className="c-project-viewer">
      {project && (
        <>
          <h1>{project['Project Name']}</h1>
          <p>{project['Lead Organization']}</p>
          <p>{project['Partner Name']}</p>
          <p>{project['Primary objective/purpose']}</p>
        </>
      )}
    </div>
  );
}

ProjectViewer.propTypes = { id: PropTypes.string.isRequired };

export default ProjectViewer;
