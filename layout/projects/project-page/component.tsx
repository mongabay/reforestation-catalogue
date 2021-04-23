import React, { useEffect } from 'react';
import Link from 'next/link';

import StaticPage from 'layout/static-page';

import ProjectViewer from 'components/project/project-viewer/component';

import { ProjectPageLayoutProps } from './types';

import './style.scss';
import { getCatalogueData } from 'services/catalogue';

const ProjectPage: React.FC<ProjectPageLayoutProps> = ({
  id,
  projects,
  updateData,
}: ProjectPageLayoutProps) => {
  useEffect(() => {
    if (!projects || projects.length === 0) {
      getCatalogueData().then(resp => updateData(resp.data));
    }
  });

  const project = projects?.find(p => `${p.projectNumber}` === id);

  return (
    <StaticPage className="p-project">
      <div className="navigation-bar">
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
      <ProjectViewer project={project} />
    </StaticPage>
  );
};

export default ProjectPage;
