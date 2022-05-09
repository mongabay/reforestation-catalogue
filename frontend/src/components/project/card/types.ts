import { Categories, Project } from 'types';

export interface ProjectCardProps {
  project: Project;
  highlightedCategory: Categories;
  openInNewWindow?: boolean;
}
