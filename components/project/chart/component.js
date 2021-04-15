import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classnames from 'classnames';

import {
  SOCIAL_CATEGORY,
  ECONOMIC_CATEGORY,
  CONTEXT_CATEGORY,
  ECOLOGICAL_CATEGORY,
  INSTITUTIONAL_CATEGORY
} from 'services/catalogue';

import './style.scss';

function ProjectChart({ project, highlightedCategory }) {

  return (
    <div className="c-project-chart">
      <svg height="160" width="160">
        <circle
          className={classnames({
            '-highlighted': highlightedCategory === CONTEXT_CATEGORY,
          })}
          cx="80"
          cy="80"
          r="77"
        />
        <circle
          className={classnames({
            '-highlighted': highlightedCategory === ECOLOGICAL_CATEGORY,
          })}
          cx="80"
          cy="80"
          r="65"
        />
        <circle
          className={classnames({
            '-highlighted': highlightedCategory === ECONOMIC_CATEGORY,
          })}
          cx="80"
          cy="80"
          r="52"
        />
        <circle
          className={classnames({
            '-highlighted': highlightedCategory === SOCIAL_CATEGORY,
          })}
          cx="80"
          cy="80"
          r="40"
        />
        <circle
          className={classnames({
            '-highlighted': highlightedCategory === INSTITUTIONAL_CATEGORY,
          })}
          cx="80"
          cy="80"
          r="27"
        />
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
