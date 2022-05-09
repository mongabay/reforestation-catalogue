import { FC, useState } from 'react';

import Button from 'components/button';
import Range from 'components/forms/range';

import { FilterProps } from '../types';

export const YearFilter: FC<FilterProps> = ({ field, onCreate }: FilterProps) => {
  const [value, setValue] = useState(2012);

  return (
    <div className="flex items-center gap-3">
      <Range
        id={field.id}
        aria-label={field.label}
        min={2000}
        max={new Date().getFullYear()}
        value={value}
        onChange={setValue}
        className="w-full"
      />
      <span className="flex-shrink-0 text-sm font-semibold">{value}</span>
      <Button className="flex-shrink-0" onClick={() => onCreate({ field: field.id, value })}>
        Apply
      </Button>
    </div>
  );
};

export default YearFilter;
