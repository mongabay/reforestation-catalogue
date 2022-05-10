import { FC } from 'react';

import cx from 'classnames';

import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  id,
  'aria-label': ariaLabel,
  type = 'text',
  name,
  defaultValue,
  value,
  placeholder,
  step,
  onChange,
  disabled,
  required,
  className,
  children,
}: InputProps) => (
  <div className="flex items-center">
    <input
      type={type}
      id={id}
      name={name}
      aria-label={ariaLabel}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      step={step}
      onChange={({ target }) => onChange(target.value)}
      disabled={disabled}
      required={required}
      className={cx(
        'block w-full px-4 py-2 text-sm bg-transparent border rounded-full focus:outline-none focus:ring-transparent focus:border-grey-dark/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green disabled:opacity-60 disabled:pointer-events-none border-grey-dark/20',
        className
      )}
    />
    {!!children && (
      <label htmlFor={id} className="ml-3 text-sm">
        {children}
      </label>
    )}
  </div>
);

export default Input;
