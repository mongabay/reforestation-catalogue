import { FC } from 'react';

import cx from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/button';

import { getFieldByID } from 'services/catalogue';

import { FilterPillProps } from './types';

export const FilterPill: FC<FilterPillProps> = ({
  filter,
  link = false,
  onRemove,
}: FilterPillProps) => {
  const field = getFieldByID(filter.field);

  return (
    <div
      className={cx({
        'inline-flex items-center py-1.5 text-sm rounded-full bg-grey': true,
        'px-5': !onRemove,
        'pl-5 pr-3': !!onRemove,
      })}
    >
      {link && (
        <Link
          href={`/explore?filters=${encodeURI(
            JSON.stringify([{ id: filter.field, value: filter.value }])
          )}`}
        >
          <a className="underline">{filter.value.toString()}</a>
        </Link>
      )}
      {!link && (
        <>
          <span className="font-semibold">{field.label}:</span>&nbsp;{filter.value.toString()}
          <Button theme="transparent" className="pl-2 pr-2 ml-1" onClick={() => onRemove()}>
            <span className="sr-only">Remove</span>
            <Image src="/icons/cross.svg" width="10" height="10" alt="Cross" aria-hidden />
          </Button>
        </>
      )}
    </div>
  );
};

export default FilterPill;
