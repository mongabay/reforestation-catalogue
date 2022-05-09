import { FC } from 'react';

import { RangeProps } from './types';

export const Range: FC<RangeProps> = ({
  id,
  'aria-label': ariaLabel,
  defaultValue,
  value,
  min,
  max,
  step = 1,
  onChange,
  disabled = false,
  required = false,
  className,
}: RangeProps) => (
  <input
    id={id}
    type="range"
    aria-label={ariaLabel}
    defaultValue={defaultValue}
    value={value}
    min={min}
    max={max}
    step={step}
    onChange={({ target }) => onChange(+target.value)}
    disabled={disabled}
    required={required}
    className={className}
  />
);

export default Range;
