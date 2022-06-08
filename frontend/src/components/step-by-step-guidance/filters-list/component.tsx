import { FC, Fragment, useState } from 'react';

import cx from 'classnames';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import Button from 'components/button';
import FilterPill from 'components/filter-pill';
import Modal from 'components/modal';
import { filtersActions, filtersSelectors } from 'modules';

import { CATEGORIES } from 'services/catalog';

import { FiltersListProps } from './types';

export const FiltersList: FC<FiltersListProps> = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const filters = useAppSelector(filtersSelectors.selectFilters);

  return (
    <>
      <Modal
        title="Edit filters"
        size="wide"
        open={modalOpen}
        onDismiss={() => setModalOpen(false)}
      >
        <div className="md:px-20">
          <h1 className="font-serif text-3xl font-bold text-green">Edit filters</h1>
          <div className="mt-9">
            {CATEGORIES.map((category, index) => (
              <Fragment key={category.id}>
                <h2 className={cx({ 'font-serif text-3xl': true, 'mt-8': index !== 0 })}>
                  {index + 1}. {category.label}
                </h2>
                <div className="flex flex-wrap gap-3 mt-7 empty:mt-0">
                  {filters
                    .filter((filter) => category.fields.find((field) => field.id === filter.field))
                    .map((filter) => (
                      <FilterPill
                        key={filter.field}
                        filter={filter}
                        onRemove={() => dispatch(filtersActions.removeFilter(filter))}
                      />
                    ))}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Modal>
      <div
        className={cx({
          'flex flex-col sm:flex-row sm:items-center justify-start max-w-xl': true,
          [className]: !!className,
        })}
      >
        <div className="text-xs text-grey-dark line-clamp-2 sm:line-clamp-1 text-ellipsis">
          <span className="font-semibold uppercase">Selected filters:</span>{' '}
          {filters.length === 0 && <span className="font-semibold">No filters selected</span>}
          {filters.length > 0 &&
            filters.map((filter) => <FilterPill key={filter.field} filter={filter} naked />)}
        </div>
        {filters.length > 0 && (
          <Button
            theme="link-primary"
            className="flex-shrink-0 sm:ml-1.5 pt-0.5 pb-0.5 pl-0.5 pr-0.5"
            onClick={() => setModalOpen(true)}
          >
            <span className="text-xs">Edit filters</span>
          </Button>
        )}
      </div>
    </>
  );
};

export default FiltersList;
