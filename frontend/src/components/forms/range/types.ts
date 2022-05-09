export interface RangeProps {
  /** ID of the input */
  id: string;
  /** Label announced to screen readers */
  'aria-label'?: string;
  /** Default value of the input */
  defaultValue?: number;
  /** Value of the input */
  value?: number;
  /** Minimum value of the input */
  min?: number;
  /** Maximum value of the input */
  max?: number;
  /** Resolution between steps. Default to `1`. */
  step?: number;
  /** Callback executed when the input's value changes */
  onChange?: (value: number) => void;
  /** Whether the input is disabled. Default to `false`. */
  disabled?: boolean;
  /** Whether the input is required. Default to `false`. */
  required?: boolean;
  /** Class to assign to the input */
  className?: string;
}
