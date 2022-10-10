import { Field } from 'types';
import { logEvent } from 'utils/analytics';
export interface StringFilterProps {
  /** Field the filter represents */
  field: Field;
  /** Value of the filter */
  filterValue: string;
  /** Event to log when the filter changes value */
  event?: Parameters<typeof logEvent>;
}
