import { Project, Categories } from 'types';

export enum ProjectChartSize {
  Default,
  Small,
}
export interface ProjectChartProps {
  /** Project the chart represents */
  project: Project;
  /** Highlighted category */
  highlightedCategory?: Categories;
  /** Stroke width of the highlighted category. Default to `2`. */
  highlightedCategoryStroke?: number;
  /** Whether to show a tooltip on hover. Default to `true`. */
  tooltip?: boolean;
}
