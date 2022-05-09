import { Field, Filter } from 'types';

export interface FilterProps {
  /** Field representing the filter */
  field: Field;
  /** Callback executed when the filter is created */
  onCreate: (filter: Filter) => void;
}

export interface CatalogFiltersProps {}
