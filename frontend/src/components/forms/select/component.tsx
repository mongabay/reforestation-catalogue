import { FC, useCallback } from 'react';

import cx from 'classnames';

import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({
  id,
  'aria-label': ariaLabel,
  options,
  placeholder = 'Select an option',
  defaultValue,
  value,
  onChange,
  disabled = false,
  required = false,
  className,
}: SelectProps) => {
  const onChangeSelect = useCallback(
    (e) => {
      const option = options.find((option) => option.value === e.target.selectedOptions[0].value);
      onChange(option);
    },
    [options, onChange]
  );

  return (
    <select
      id={id}
      aria-label={ariaLabel}
      defaultValue={defaultValue ?? (placeholder ? '' : undefined)}
      value={value}
      onChange={onChangeSelect}
      disabled={disabled}
      required={required}
      className={cx(
        'block w-full text-sm focus:outline-none focus:ring-transparent focus:border-grey-dark/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green disabled:opacity-60 disabled:pointer-events-none border border-grey-dark/20 rounded-full py-2 px-4 bg-transparent',
        className
      )}
    >
      {!!placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
