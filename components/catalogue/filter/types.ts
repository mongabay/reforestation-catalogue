import { Filter } from 'types';

export interface CatelogueFilterProps {
  filters: Filter[];
  addFilter?: (f: Filter) => unknown;
}
