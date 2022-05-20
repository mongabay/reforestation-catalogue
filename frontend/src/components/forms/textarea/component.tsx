import { FC } from 'react';

import cx from 'classnames';

import { TextareaProps } from './types';

export const Textarea: FC<TextareaProps> = ({
  id,
  'aria-label': ariaLabel,
  name,
  defaultValue,
  value,
  placeholder,
  onChange,
  disabled,
  required,
  rows,
  className,
  children,
}: TextareaProps) => (
  <div className="flex items-center">
    <textarea
      id={id}
      name={name}
      aria-label={ariaLabel}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChange={({ target }) => onChange?.(target.value)}
      disabled={disabled}
      required={required}
      rows={rows}
      className={cx(
        'block w-full px-4 py-2 text-sm bg-transparent border rounded-2xl focus:outline-none focus:ring-transparent focus:border-grey-dark/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green disabled:opacity-60 disabled:pointer-events-none border-grey-dark/20',
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

export default Textarea;
