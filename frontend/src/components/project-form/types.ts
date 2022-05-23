import { Project, ProjectFormData } from 'types';

export interface ProjectFormStep {
  /** Name of the step */
  name: string;
  /** Description of the step */
  description: string;
  /** Component to render at that step */
  Component: React.FC<{
    /** Values of the form */
    values: Partial<ProjectFormData>;
  }>;
}

export interface ProjectFormProps {
  /** Project for which changes are being suggested, if any */
  project?: Project;
}
