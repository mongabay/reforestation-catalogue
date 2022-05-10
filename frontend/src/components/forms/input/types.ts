import { PropsWithChildren } from 'react';

import { string } from 'yup';

export type InputProps = PropsWithChildren<{
  /** ID of the input */
  id: string;
  /** Label announced to screen readers */
  'aria-label'?: string;
  /** Type of the input. Default to `'text'`. */
  type: string;
  /** Name of the input */
  name?: string;
  /** Default value of the input */
  defaultValue?: number | string;
  /** Value of the input */
  value?: number | string;
  /** Resolution of the step (number input only) */
  step?: number;
  /** Callback executed when the value changes */
  onChange?: (value: number | string) => void;
  /** Whether the input is disabled. Default to `false`. */
  disabled?: boolean;
  /** Whether the input is required. Default to `false`. */
  required?: boolean;
  /** Class to assign to the input't container */
  className?: string;
}>;