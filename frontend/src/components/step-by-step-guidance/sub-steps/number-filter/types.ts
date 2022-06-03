import { Field } from 'types';

export interface NumberFilterProps {
  /** Field the filter represents */
  field: Field;
  /** Value of the filter */
  filterValue: number;
}
