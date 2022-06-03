import { Field } from 'types';

export interface StringFilterProps {
  /** Field the filter represents */
  field: Field;
  /** Value of the filter */
  filterValue: string;
}
