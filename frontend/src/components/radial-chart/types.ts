import { Categories } from 'types';

export interface RadialChartProps {
  /** The chart's highlighted category */
  highlightedCategory?: Categories;
  /** Stroke width of the highlighted category. Default to `2`. */
  highlightedCategoryStroke?: number;
  /** Value for each category */
  categoriesPercentages: unknown;
  /** Whether the project was finalized */
  finalized: boolean;
}
