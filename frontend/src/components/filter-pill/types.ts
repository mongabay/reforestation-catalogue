import { Filter } from 'types';

export interface FilterPillProps {
  /** Filter representing the pill */
  filter: {
    field: Filter['field'];
    value:
      | Filter['value']
      // Needed for the “Reported information” and “Non-reported information” sections
      | number[];
  };
  /** Whether to show the filter's value. Default to `true`. */
  showValue?: boolean;
  /** Display the pill without styles. Default to `false`. */
  naked?: boolean;
  /** Callback executed when removing the pill (action only possible if this callback is present) */
  onRemove?: () => void;
}
