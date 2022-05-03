import React from 'react';

import Router from 'next/router';

import ProjectChart from '../chart';

import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  highlightedCategory,
  openInNewWindow,
}: ProjectCardProps) => {
  return (
    <a
      className="c-project-card"
      href={`/project?id=${project.projectNumber}`}
      target={openInNewWindow ? '_blank' : undefined}
      rel="noreferrer"
    >
      <ProjectChart project={project} highlightedCategory={highlightedCategory} cardMode={true} />
    </a>
  );
};

export default ProjectCard;
