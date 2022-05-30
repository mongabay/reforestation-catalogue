export interface TimelinePaginationProps {
  /** List of all the steps */
  steps: {
    name: string;
  }[];
  /** Index of the current step */
  currentStep: number;
  /** Callback executed when the user clicks a step */
  onClickStep: (step: number) => void;
}
