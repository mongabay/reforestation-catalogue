import React, { useState } from 'react';

import CategoryInfoTooltip from 'components/category/info-tooltip/component';
import { Radio, Select, Range } from 'components/forms';
import Pill from 'components/pill';
import { FilterTypes } from 'types';
import { getCategoryInfoModalText } from 'utils/category';
import { getUniqueValuesForField } from 'utils/project';

import { CATEGORIES } from 'services/catalogue';

import { CatelogueFilterProps } from './types';

const CatelogueFilter: React.FC<CatelogueFilterProps> = ({
  filters,
  projects,
  categoriesConfig,
  addFilter,
}: CatelogueFilterProps) => {
  const YEAR_DEFAULT_VALUE = 2012;
  const [filterSelected, setFilterSelected] = useState(null);
  const [yearValue, setYearValue] = useState(YEAR_DEFAULT_VALUE);
  const [numberValue, setNumberValue] = useState(0);

  const getFilterCreator = (filter) => {
    if (filter.type === FilterTypes.String) {
      return (
        <div className="select-filter">
          <Select
            options={getUniqueValuesForField(projects, filter.value, filter.commaSeparated).map(
              (e) => ({
                value: e,
                label: e,
              })
            )}
            showSelectAnOption={true}
            selectAnOptionText="Select a value"
            onChange={({ value }) => {
              addFilter({
                mode: filter.mode,
                type: filter.type,
                propertyName: filter.value,
                label: filter.label,
                value,
              });
              setFilterSelected(null);
            }}
          />
        </div>
      );
    } else if (filter.type === FilterTypes.Boolean) {
      return (
        <div className="radio-filter">
          <Radio
            id="yes-radio"
            className="yes-radio"
            name="yes-no-radio"
            disabled={false}
            checked={false}
            onChange={() => {
              setFilterSelected(null);
              addFilter({
                mode: filter.mode,
                type: filter.type,
                propertyName: filter.value,
                label: filter.label,
                value: true,
              });
            }}
          >
            YES
          </Radio>
          <Radio
            id="no-radio"
            className="no-radio"
            name="yes-no-radio"
            checked={false}
            disabled={false}
            onChange={() => {
              setFilterSelected(null);
              addFilter({
                mode: filter.mode,
                type: filter.type,
                propertyName: filter.value,
                label: filter.label,
                value: false,
              });
            }}
          >
            NO
          </Radio>
        </div>
      );
    } else if (filter.type === FilterTypes.Year) {
      return (
        <div className="year-filter">
          <Range
            min={2000}
            max={2021}
            defaultValue={YEAR_DEFAULT_VALUE}
            onChange={({ target: { value } }) => setYearValue(value)}
          />
          <span className="year-value">{yearValue}</span>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setFilterSelected(null);
              addFilter({
                mode: filter.mode,
                type: filter.type,
                propertyName: filter.value,
                label: filter.label,
                value: yearValue,
              });
            }}
          >
            Apply
          </button>
        </div>
      );
    } else if (filter.type === FilterTypes.Number) {
      return (
        <div className="number-filter">
          <input
            type="number"
            step="100"
            onChange={({ target: { value } }) => setNumberValue(Number(value))}
            defaultValue={0}
          />
          <button
            className="btn btn-secondary"
            onClick={() => {
              setFilterSelected(null);
              addFilter({
                mode: filter.mode,
                type: filter.type,
                propertyName: filter.value,
                label: filter.label,
                value: numberValue,
              });
            }}
          >
            Apply
          </button>
        </div>
      );
    }
  };

  return (
    <div className="c-catalogue-filter">
      {CATEGORIES.map((c) => {
        const categoryFieldIDs = c.fields.map((cf) => cf.id);

        return (
          <div key={`category-${c.id}`} className="category-container">
            <div className="title">
              <CategoryInfoTooltip text={getCategoryInfoModalText(c.id, categoriesConfig)} />
              <div className="-bold category-label"> {`${c.label}:`}</div>
            </div>
            <div className="filters-section">
              <Select
                id={`select-filter-${c.id}`}
                className="filter-selector"
                defaultValue={null}
                onChange={({ value }) => {
                  const filterValue = CATEGORIES.find((elem) => elem.id === c.id).fields.find(
                    (f) => f.id === value
                  );
                  setFilterSelected({
                    ...filterValue,
                    category: c.id,
                    value,
                  });
                }}
                options={c.fields
                  .filter((f) => !f.hidden)
                  .map((f) => ({
                    ...f,
                    label: f.label,
                    value: f.id,
                  }))}
                showSelectAnOption={true}
                selectAnOptionText="Add filter"
              />
              {filterSelected &&
                filterSelected.category === c.id &&
                getFilterCreator(filterSelected)}
              <div className="filters-applied">
                {filters &&
                  filters
                    .filter((f) => categoryFieldIDs.includes(f.propertyName))
                    .map((f) => (
                      <Pill key={`pill-${f.propertyName}`} filter={f} linkMode={false} />
                    ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatelogueFilter;
