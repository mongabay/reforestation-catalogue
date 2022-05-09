import { Project, Categories } from 'types';

export interface ProjectChartProps {
  project: Project;
  highlightedCategory?: Categories;
  cardMode?: boolean;
}
