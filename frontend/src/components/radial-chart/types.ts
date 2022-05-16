import { Categories } from 'types';

export interface RadialChartProps {
  /** The chart's highlighted category */
  highlightedCategory?: Categories;
  /** Value for each category */
  categoriesPercentages: unknown;
  /** Whether the project was finalized */
  finalized: boolean;
  /** Reduce the contract of the chart */
  reducedContrast: boolean;
}
