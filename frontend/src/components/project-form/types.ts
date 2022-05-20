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
  steps: ProjectFormStep[];
  /** Index of the current step */
  currentStep: number;
  /** Project for which changes are being suggested, if any */
  project?: Project;
  /** Callback executed when the user moves to a different step */
  onChangeStep: (step: number) => void;
}
