import { FC, useMemo } from 'react';

import cx from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import { useEnums } from 'hooks/enums';

import Button from 'components/button';
import LoadingSpinner from 'components/loading-spinner';
import { FilterTypes } from 'types';
import { toTitleCase } from 'utils/misc';
import { serialize } from 'utils/routing';

import { getFieldByID } from 'services/catalog';

import { FilterPillProps } from './types';

export const FilterPill: FC<FilterPillProps> = ({
  filter,
  link = false,
  naked = false,
  onRemove,
}: FilterPillProps) => {
  const field = getFieldByID(filter.field);

  const { isLoading, isError, data } = useEnums();

  const formattedValue = useMemo(() => {
    if (field.type === FilterTypes.String) {
      if (isError) {
        return '−';
      }

      if (isLoading) {
        return (
          <div className="inline-block">
            <LoadingSpinner inline mini transparent />
          </div>
        );
      }

      const match = data.find((e) => e.name === field.id);
      if (!match) {
        return '−';
      }

      const name = Object.entries(match.data).find(
        ([, value]) => `${value}` === `${filter.value}`
      )?.[0];
      if (!name) {
        return '−';
      }

      return toTitleCase(name);
    }

    return filter.value.toString();
  }, [filter, field, isLoading, isError, data]);

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
          <a className="underline">{field.label}</a>
        </Link>
      )}
      {!link && (
        <>
          <div>
            <span className="font-semibold">{field.label}:</span>&nbsp;{formattedValue}
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
