import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import StaticPage from 'layout/static-page';

import './style.scss';
import ProjectViewer from 'components/project/project-viewer/component';

const ProjectPage = ({ id }) => {
  return (
    <StaticPage className="p-project">
      <div className="navigation-bar">
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
      <ProjectViewer id={id} />
    </StaticPage>
  );
};

ProjectPage.propTypes = { id: PropTypes.string.isRequired };

export default ProjectPage;
