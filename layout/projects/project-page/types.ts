import { Project } from 'types';

export interface ProjectPageLayoutProps {
  id: string;
  projects?: Project[];
  categoriesConfig?: unknown;
  updateData?;
}
