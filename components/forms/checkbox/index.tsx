import React from 'react';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  disabled,
  checked,
  onChange,
  children,
  className,
}: CheckboxProps) => (
  <div
    className={[
      'custom-control',
      'custom-checkbox',
      'c-checkbox',
      ...(className ? [className] : []),
    ].join(' ')}
  >
    <input
      type="checkbox"
      className="custom-control-input"
      disabled={disabled}
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label className="custom-control-label" htmlFor={id}>
      {children}
    </label>
  </div>
);

export default Checkbox;
