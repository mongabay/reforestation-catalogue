import { Categories } from 'types';

export interface RadialChartProps {
  highlightedCategory: string;
  categoriesPercentages: unknown;
  legendMode: boolean;
  finalised?: boolean;
  updateSort?: (c: Categories) => unknown;
}
