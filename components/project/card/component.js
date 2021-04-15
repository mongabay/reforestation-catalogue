import React from 'react';
import PropTypes from 'prop-types';

import ProjectChart from '../chart/component';

import './style.scss';

function ProjectCard({ project, highlightedCategory }) {

  return (
    <div className="c-project-card">
      <ProjectChart project={project} highlightedCategory={highlightedCategory} />
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  highlightedCategory: PropTypes.string,
};

export default ProjectCard;
