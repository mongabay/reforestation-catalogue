export interface SelectOption {
  /** Text shown in the UI */
  label: string;
  /** Internal value of the option */
  value: string;
  /** Whether the option is disabled. Default to `false`. */
  disabled?: boolean;
}

export interface SelectProps {
  /** ID of the input */
  id: string;
  /** Label announced to screen readers */
  'aria-label'?: string;
  /** List of options */
  options: SelectOption[];
  /** Placeholder to display in the input. Default to `'Select an option'`. */
  placeholder?: string;
  /** Value of the default option. Default to selecting the placeholder. */
  defaultValue?: string;
  /** Value of the selected option */
  value?: string;
  /** Callback executed when the option changes */
  onChange?: (option: SelectOption) => void;
  /** Whether the input is disabled. Default to `false`. */
  disabled?: boolean;
  /** Whether the input is required. Default to `false`. */
  required?: boolean;
  /** Class to assign to the input */
  className?: string;
}
