import React from 'react';
import PropTypes from 'prop-types';

// components
import LayoutProjectPage from 'layout/projects/project-page';

function ProjectPage({ id }) {
  return <LayoutProjectPage id={id} />;
}

export async function getStaticProps(context) {
  console.log('context', context);
  // const id = context?.query?.id;
  return { props: {} };
}

ProjectPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectPage;
