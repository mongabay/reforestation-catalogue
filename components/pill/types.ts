import { Filter } from 'types';

export interface PillProps {
  filter: Filter;
  removeFilter?: (f: Filter) => unknown;
  linkMode: boolean;
}
