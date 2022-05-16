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
  /** Reduce the contract of the chart. Default to `false`. */
  reducedContrast?: boolean;
  /** Whether to show a tooltip on hover. Default to `true`. */
  tooltip?: boolean;
  /** Size of the chart. Default to `ProjectChartSize.Default`. */
  size?: ProjectChartSize;
}
