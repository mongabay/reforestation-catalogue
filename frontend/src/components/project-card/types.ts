import { Categories, Project } from 'types';

export interface ProjectCardProps {
  /** Project the card represents */
  project: Project;
  /** Category to highlight */
  highlightedCategory?: Categories;
  /** Whether to open the project in a new window when clicked */
  openInNewWindow?: boolean;
  /** Whether to show a tooltip on hover. Default to true. **/
  tooltip?: boolean;
}
