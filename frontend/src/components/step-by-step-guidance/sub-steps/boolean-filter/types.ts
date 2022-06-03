import { Field } from 'types';

export interface BooleanFilterProps {
  /** Field the filter represents */
  field: Field;
  /** Value of the filter */
  filterValue: boolean;
}
