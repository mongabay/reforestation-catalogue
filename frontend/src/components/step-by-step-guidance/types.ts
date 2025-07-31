import { StepByStepGuidanceSubStep } from './sub-steps';

export interface StepByStepGuidanceStep {
  /** Name of the step */
  name: string;
  /** Description of the step */
  description: string;
  /** URL of the image displayed on the side */
  image: string;
  /** Category associated with the step */
  category: string;
  /** List of sub-steps */
  steps: StepByStepGuidanceSubStep[];
}

export interface StepByStepGuidanceProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback to close the modal */
  onDismiss: () => void;
  /** Callback to set the filters open state */
  setIsFiltersOpen: (isOpen: boolean) => void;
}
