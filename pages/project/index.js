import React from 'react';
import PropTypes from 'prop-types';

// components
import LayoutProjectPage from 'layout/projects/project-page';

function ProjectPage({ id }) {
  return <LayoutProjectPage id={id} />;
}

ProjectPage.getInitialProps = async context => {
  const id = context?.query?.id;
  return { id };
};

ProjectPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectPage;
