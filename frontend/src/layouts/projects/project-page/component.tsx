import React, { useEffect } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import ProjectViewer from 'components/project/project-viewer';
import StaticPage from 'layouts/static-page';

import { getCatalogueData } from 'services/catalogue';

import { ProjectPageLayoutProps } from './types';

const ProjectPage: React.FC<ProjectPageLayoutProps> = ({
  id,
  projects,
  updateData,
}: ProjectPageLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!projects || projects.length === 0) {
      getCatalogueData()
        .then((resp) => updateData(resp.data))
        .catch((err) => console.error(err));
    }
  }, []);

  const project = projects?.find((p) => `${p.projectNumber}` === id);

  return (
    <StaticPage className="p-project">
      <div className="navigation-bar">
        <Link href="/">
          <a>
            <motion.div whileHover="hover" className="back-container">
              <motion.img
                variants={{
                  hover: {
                    translateX: '-5px',
                    transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
                  },
                }}
                src="/icons/back.svg"
              />
              <motion.span className="back-text">Back to all projects</motion.span>
            </motion.div>
          </a>
        </Link>
      </div>
      <ProjectViewer project={project} />
    </StaticPage>
  );
};

export default ProjectPage;
