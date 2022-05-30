import { FC } from 'react';

import cx from 'classnames';

import { INPUT_CLASSNAME, LABEL_CLASSNAME } from './constants';
import { RadioProps } from './types';

export const Radio: FC<RadioProps> = ({
  theme = 'default',
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
}: RadioProps) => (
  <div className={cx('flex items-center', className)}>
    <input
      type="radio"
      className={INPUT_CLASSNAME[theme]}
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
    <label htmlFor={id} className={LABEL_CLASSNAME[theme]}>
      {children}
    </label>
  </div>
);

export default Radio;
