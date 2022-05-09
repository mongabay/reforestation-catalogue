import { FC } from 'react';

import cx from 'classnames';

import { RadioProps } from './types';

export const Radio: FC<RadioProps> = ({
  id,
  'aria-label': ariaLabel,
  name,
  defaultValue,
  value,
  onChange,
  disabled,
  required,
  className,
  children,
}: RadioProps) => (
  <div className={cx('flex items-center', className)}>
    <input
      type="radio"
      className="w-4 h-4 focus-visible:ring-green focus:ring-transparent text-green border-grey-dark/20"
      id={id}
      name={name}
      aria-label={ariaLabel}
      defaultChecked={defaultValue}
      checked={value}
      onChange={({ target }) => onChange(target.checked)}
      disabled={disabled}
      required={required}
    />
    <label htmlFor={id} className="ml-3 text-sm">
      {children}
    </label>
  </div>
);

export default Radio;
