import React from 'react';

import Router from 'next/router';

import ProjectChart from '../chart';

import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  highlightedCategory,
}: ProjectCardProps) => {
  return (
    <div
      className="c-project-card"
      onClick={() => Router.push(`/project?id=${project.projectNumber}`)}
    >
      <ProjectChart project={project} highlightedCategory={highlightedCategory} cardMode={true} />
    </div>
  );
};

export default ProjectCard;
