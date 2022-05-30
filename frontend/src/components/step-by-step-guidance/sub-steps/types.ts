import { Field } from 'types';

export interface StepByStepGuidanceSubStep {
  /** Name of the sub-step */
  name: string;
  /** Description of the sub-step */
  description: string;
  /** Fields associated with the sub-step */
  fields: Field['id'][];
}

export type SubStepsProps = {
  /** Category of the fields */
  category: string;
  /** Steps to render */
  steps: StepByStepGuidanceSubStep[];
};
