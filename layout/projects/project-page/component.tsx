import React, { useEffect } from 'react';
import Link from 'next/link';

import StaticPage from 'layout/static-page';

import ProjectViewer from 'components/project/project-viewer';

import { ProjectPageLayoutProps } from './types';

import './style.scss';
import { getCatalogueData } from 'services/catalogue';
import Header from 'layout/header/component';

const ProjectPage: React.FC<ProjectPageLayoutProps> = ({
  id,
  projects,
  updateData,
}: ProjectPageLayoutProps) => {
  useEffect(() => {
    if (!projects || projects.length === 0) {
      getCatalogueData()
        .then(resp => updateData(resp.data))
        .catch(err => console.error(err));
    }
  }, []);

  const project = projects?.find(p => `${p.projectNumber}` === id);

  return (
    <StaticPage className="p-project">
      <Header />
      <div className="navigation-bar">
        <Link href="/">
          <a>
            <div className="back-container">
              <img src="/icons/back.svg" />
              <span className="back-text">Back to all projects</span>
            </div>
          </a>
        </Link>
      </div>
      <ProjectViewer project={project} />
    </StaticPage>
  );
};

export default ProjectPage;
