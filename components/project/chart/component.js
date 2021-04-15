import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './style.scss';

function ProjectChart({ project, highlightedCategory }) {



  return (
    <div className="c-project-chart">
      <svg height="160" width="160">
        <circle cx="80" cy="80" r="77" />
        <circle cx="80" cy="80" r="65" />
        <circle cx="80" cy="80" r="52" />
        <circle cx="80" cy="80" r="40" />
        <circle cx="80" cy="80" r="27" />
      </svg>
      <Link href={`/project/${project['Project Number']}`}>
        <a className="title">{project['Project Name']}</a>
      </Link>
    </div>
  );
}

ProjectChart.propTypes = {
  project: PropTypes.object.isRequired,
  highlightedCategory: PropTypes.string,
};

export default ProjectChart;
