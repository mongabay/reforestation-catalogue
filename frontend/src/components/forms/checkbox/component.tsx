import { FC } from 'react';

import cx from 'classnames';

import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = ({
  id,
  'aria-label': ariaLabel,
  name,
  defaultChecked,
  checked,
  value,
  onChange,
  disabled,
  required,
  className,
  children,
}: CheckboxProps) => (
  <div className={cx('flex items-center', className)}>
    <input
      type="checkbox"
      className="w-4 h-4 rounded-md focus-visible:ring-green focus:ring-transparent text-green border-grey-dark"
      id={id}
      name={name}
      aria-label={ariaLabel}
      defaultChecked={defaultChecked}
      checked={checked}
      value={value}
      onChange={({ target }) => onChange?.(target.checked)}
      disabled={disabled}
      required={required}
    />
    <label htmlFor={id} className="ml-3 text-sm">
      {children}
    </label>
  </div>
);

export default Checkbox;
