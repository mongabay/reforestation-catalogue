import { FC } from 'react';

import cx from 'classnames';

import { InputProps } from './types';

const variantClasses = {
  default: 'bg-transparent',
  primary:
    'bg-green-emerald/40 placeholder:text-primary text-primary focus:border-green-dark/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
};

export const Input: FC<InputProps> = ({
  id,
  'aria-label': ariaLabel,
  type = 'text',
  name,
  defaultValue,
  value,
  placeholder,
  step,
  min,
  max,
  pattern,
  onChange,
  icon,
  disabled,
  required,
  className,
  children,
  variant = 'default',
  ...rest
}: InputProps) => {
  const IconComponent = icon;
  return (
    <div className="flex items-center relative">
      <input
        {...rest}
        type={type}
        id={id}
        name={name}
        aria-label={ariaLabel}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        step={step}
        min={min}
        max={max}
        pattern={pattern}
        onChange={({ target }) => onChange?.(target.value)}
        disabled={disabled}
        required={required}
        className={cx(
          'block w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-transparent focus:border-grey-dark/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green disabled:opacity-60 disabled:pointer-events-none border-grey-dark/20',
          variantClasses[variant],
          { 'pl-14': !!icon },
          className
        )}
      />
      {icon && (
        <span className="absolute left-6">
          {<IconComponent aria-hidden className="w-5 h-5 text-white" />}
        </span>
      )}

      {!!value && !disabled && (
        <button
          type="button"
          aria-label="Clear input"
          onClick={() => onChange?.('')}
          className="absolute right-4"
          tabIndex={0}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <circle cx="10" cy="10" r="10" fill="white" />
            <path
              d="M13 7L7 13M7 7l6 6"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {!!children && (
        <label htmlFor={id} className="ml-3">
          {children}
        </label>
      )}
    </div>
  );
};

export default Input;
