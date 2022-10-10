import { Field } from 'types';
import { logEvent } from 'utils/analytics';

export interface BooleanFilterProps {
  /** Field the filter represents */
  field: Field;
  /** Value of the filter */
  filterValue: boolean;
  /** Event to log when the filter changes value */
  event?: Parameters<typeof logEvent>;
}
