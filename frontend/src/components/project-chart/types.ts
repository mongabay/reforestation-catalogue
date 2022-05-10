import { Project, Categories } from 'types';

export interface ProjectChartProps {
  /** Project the chart represents */
  project: Project;
  /** Highlighted category */
  highlightedCategory?: Categories;
}
