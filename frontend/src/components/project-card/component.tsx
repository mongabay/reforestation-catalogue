import { FC } from 'react';

import Button from 'components/button';
import ProjectChart from 'components/project-chart';

import { ProjectCardProps } from './types';

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
  highlightedCategory,
  openInNewWindow,
  tooltip = true,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col w-64 px-3 py-5 text-sm text-center transition hover:shadow-md focus-within:shadow-md bg-grey-light rounded-3xl">
      <div className="flex justify-center">
        <ProjectChart
          project={project}
          highlightedCategory={highlightedCategory}
          tooltip={tooltip}
        />
      </div>
      <p className="flex-grow block mt-3">{project.project_name}</p>
      <Button
        theme="link"
        to={`/explore/project/${project.id}`}
        target={openInNewWindow ? '_blank' : undefined}
        className="justify-center mt-5 focus-visible:!outline-grey-darker"
      >
        <span className="underline text-grey-darker">Go to Project</span>
      </Button>
    </div>
  );
};

export default ProjectCard;
