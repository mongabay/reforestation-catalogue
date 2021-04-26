import { Filter, Project } from 'types';

export interface CatelogueFilterProps {
  filters: Filter[];
  projects: Project[];
  addFilter?: (f: Filter) => unknown;
}
