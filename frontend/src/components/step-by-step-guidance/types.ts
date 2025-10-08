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
  /** Callback executed when the user goes to the catalog */
  onNavigateToCatalog: () => void;
}
