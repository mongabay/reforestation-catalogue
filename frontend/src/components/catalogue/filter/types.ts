import { Filter, Project } from 'types';

export interface CatelogueFilterProps {
  filters: Filter[];
  projects: Project[];
  categoriesConfig: any[];
  addFilter?: (f: Filter) => unknown;
}
