import { FC } from 'react';

import cx from 'classnames';

import Image from 'next/image';

import { useField, useFormatFieldValue } from 'hooks/fields';

import Button from 'components/button';

import { FilterPillProps } from './types';

export const FilterPill: FC<FilterPillProps> = ({
  filter,
  naked = false,
  showValue = true,
  onRemove,
}: FilterPillProps) => {
  const field = useField(filter.field);
  const value = useFormatFieldValue(field, filter.value);

  return (
    <div
      className={cx({
        'inline-flex items-center': true,
        'py-1.5 rounded-full bg-grey text-sm': !naked,
        'px-5': !naked && !onRemove,
        'pl-5 pr-3': !naked && !!onRemove,
      })}
    >
      <div>
        <span className="font-semibold">
          {field.label}
          {showValue ? ':' : null}
        </span>
        {showValue ? <>&nbsp;{value}</> : null}
      </div>
      {onRemove && (
        <Button theme="transparent" className="pl-2 pr-2 ml-1" onClick={() => onRemove()}>
          <span className="sr-only">Remove</span>
          <Image src="/icons/cross.svg" width="10" height="10" alt="Cross" aria-hidden />
        </Button>
      )}
    </div>
  );
};

export default FilterPill;
