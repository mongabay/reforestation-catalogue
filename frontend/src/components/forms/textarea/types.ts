import { PropsWithChildren } from 'react';

export type TextareaProps = PropsWithChildren<{
  /** ID of the input */
  id: string;
  /** Label announced to screen readers */
  'aria-label'?: string;
  /** Name of the input */
  name?: string;
  /** Default value of the input */
  defaultValue?: number | string;
  /** Value of the input */
  value?: number | string;
  /** Placeholder of the input */
  placeholder?: string;
  /** Callback executed when the value changes */
  onChange?: (value: string) => void;
  /** Whether the input is disabled. Default to `false`. */
  disabled?: boolean;
  /** Whether the input is required. Default to `false`. */
  required?: boolean;
  /** Default number of lines */
  rows?: number;
  /** Class to assign to the input't container */
  className?: string;
}>;
