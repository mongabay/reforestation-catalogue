import { Filter } from 'types';

export interface FilterPillProps {
  /** Filter representing the pill */
  filter: Filter;
  /** Whether to link the pill to a filtered view of the catalog. Default to `false`. */
  link?: boolean;
  /** Callback executed when removing the pill (action only possible if this callback is present) */
  onRemove?: () => void;
}
