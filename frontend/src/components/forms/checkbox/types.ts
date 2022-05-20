import { PropsWithChildren } from 'react';

export type CheckboxProps = PropsWithChildren<{
  /** ID of the input */
  id: string;
  /** Label announced to screen readers */
  'aria-label'?: string;
  /** Name of the input */
  name: string;
  /** Whether the input is checked by default */
  defaultChecked?: boolean;
  /** Whether the input is checked */
  checked?: boolean;
  /** Value of the input */
  value?: string;
  /** Callback executed when the value changes */
  onChange?: (value: boolean) => void;
  /** Whether the input is disabled. Default to `false`. */
  disabled?: boolean;
  /** Whether the input is required. Default to `false`. */
  required?: boolean;
  /** Class to assign to the input't container */
  className?: string;
}>;
