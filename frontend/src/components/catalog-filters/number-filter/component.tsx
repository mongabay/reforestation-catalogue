import { FC, useState } from 'react';

import Button from 'components/button';
import Input from 'components/forms/input';
import Range from 'components/forms/range';

import { FilterProps } from '../types';

export const NumberFilter: FC<FilterProps> = ({ field, onCreate }: FilterProps) => {
  const [value, setValue] = useState('');

  return (
    <div className="flex items-center gap-3">
      <Input
        id={field.id}
        type="number"
        aria-label={field.label}
        step={100}
        value={value}
        onChange={(value) => setValue(value as string)}
        className="w-full"
      />
      <Button
        className="flex-shrink-0"
        onClick={() =>
          onCreate({
            field: field.id,
            value: Number.isNaN(+value) ? 0 : +value,
          })
        }
      >
        Apply
      </Button>
    </div>
  );
};

export default NumberFilter;
