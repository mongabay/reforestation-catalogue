import { FC } from 'react';

import cx from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import { useField, useFormatFieldValue } from 'hooks/fields';

import Button from 'components/button';
import { serialize } from 'utils/routing';

import { FilterPillProps } from './types';

export const FilterPill: FC<FilterPillProps> = ({
  filter,
  link = false,
  naked = false,
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
      {link && (
        <Link
          href={`/explore?filters=${
            serialize({ filters: [{ field: filter.field, value: filter.value }] }).filters
          }`}
        >
          <a className="underline focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-green">
            {field.label}
          </a>
        </Link>
      )}
      {!link && (
        <>
          <div>
            <span className="font-semibold">{field.label}:</span>&nbsp;{value}
          </div>
          {onRemove && (
            <Button theme="transparent" className="pl-2 pr-2 ml-1" onClick={() => onRemove()}>
              <span className="sr-only">Remove</span>
              <Image src="/icons/cross.svg" width="10" height="10" alt="Cross" aria-hidden />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default FilterPill;
