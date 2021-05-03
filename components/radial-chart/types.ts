import { Category } from 'types';

export interface RadialChartProps {
  highlightedCategory: string;
  categoriesPercentages: unknown;
  legendMode: boolean;
  finalised?: boolean;
  updateSort?: (c: Category) => unknown;
}
