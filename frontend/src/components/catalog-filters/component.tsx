import React, { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import FilterPill from 'components/filter-pill';
import Select from 'components/forms/select';
import InfoTooltip from 'components/info-tooltip';
import { selectFilters } from 'modules/filters';
import { addFilter, removeFilter } from 'modules/filters';
import { Field, Filter, FilterTypes } from 'types';

import { CATEGORIES } from 'services/catalogue';

import BooleanFilter from './boolean-filter';
import NumberFilter from './number-filter';
import StringFilter from './string-filter';
import { CatalogFiltersProps } from './types';
import YearFilter from './year-filter';

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({}: CatalogFiltersProps) => {
  const filters = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  const [selectedField, setSelectedField] = useState<
    Field & { category: typeof CATEGORIES[0]['id'] }
  >(null);

  const onCreateFilter = useCallback(
    (filter: Filter) => {
      dispatch(addFilter(filter));
      setSelectedField(null);
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col gap-7">
      {CATEGORIES.map((category) => (
        <fieldset key={category.id}>
          <legend className="flex items-center">
            <InfoTooltip text={category.description} className="mr-1.5" />
            <span className="text-sm font-semibold">{category.label}</span>
          </legend>
          <div className="mt-2.5">
            <Select
              id={category.id}
              aria-label="Add filter"
              placeholder="Add filter"
              options={category.fields
                .filter((field) => !field.hidden)
                .map(({ id: value, label }) => ({ label, value }))}
              onChange={({ value }) => {
                const field = category.fields.find((f) => f.id === value);
                setSelectedField({
                  ...field,
                  category: category.id,
                });
              }}
            />

            {!!selectedField && selectedField.category === category.id && (
              <div className="mt-2">
                {selectedField.type === FilterTypes.String && (
                  <StringFilter field={selectedField} onCreate={onCreateFilter} />
                )}
                {selectedField.type === FilterTypes.Boolean && (
                  <BooleanFilter field={selectedField} onCreate={onCreateFilter} />
                )}
                {selectedField.type === FilterTypes.Year && (
                  <YearFilter field={selectedField} onCreate={onCreateFilter} />
                )}
                {selectedField.type === FilterTypes.Number && (
                  <NumberFilter field={selectedField} onCreate={onCreateFilter} />
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              {filters.length > 0 &&
                filters
                  .filter((filter) => category.fields.find((field) => field.id === filter.field))
                  .map((filter) => (
                    <FilterPill
                      key={filter.field}
                      filter={filter}
                      onRemove={() => dispatch(removeFilter(filter))}
                    />
                  ))}
            </div>
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default CatalogFilters;
