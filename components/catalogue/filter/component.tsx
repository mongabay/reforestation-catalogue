import React, { useState } from 'react';

import { CATEGORIES } from 'services/catalogue';
import { CatelogueFilterProps } from './types';

import './style.scss';
import { FilterTypes } from 'types';
import { Radio, Select } from 'components/forms';
import Pill from 'components/pill';
import { getUniqueValuesForField } from 'utils/project';
import CategoryInfoTooltip from 'components/category/info-tooltip/component';

const CatelogueFilter: React.FC<CatelogueFilterProps> = ({
  filters,
  projects,
  categoriesConfig,
  addFilter,
}: CatelogueFilterProps) => {
  const [filterSelected, setFilterSelected] = useState(null);

  const getFilterCreator = filter => {
    if (filter.type === FilterTypes.String) {
      return (
        <div className="select-filter">
          <Select
            options={getUniqueValuesForField(projects, filter.value, filter.commaSeparated).map(
              e => ({
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
    }
  };

  const getCategoryInfoModalText = categoryId => {
    const category = categoriesConfig?.find(cat => cat.id === categoryId);
    return category ? category.infoModalText : '';
  };

  return (
    <div className="c-catalogue-filter">
      {CATEGORIES.map(c => {
        const categoryFieldIDs = c.fields.map(cf => cf.id);

        return (
          <div key={`category-${c.id}`} className="category-container">
            <div className="title">
              <CategoryInfoTooltip text={getCategoryInfoModalText(c.id)} />
              <div className="-bold category-label"> {`${c.label}:`}</div>
            </div>
            <div className="filters-section">
              <Select
                id={`select-filter-${c.id}`}
                className="filter-selector"
                defaultValue={null}
                onChange={({ value }) => {
                  const filterValue = CATEGORIES.find(elem => elem.id === c.id).fields.find(
                    f => f.id === value
                  );
                  setFilterSelected({
                    ...filterValue,
                    category: c.id,
                    value,
                  });
                }}
                options={c.fields
                  .filter(f => !f.hidden)
                  .map(f => ({
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
                    .filter(f => categoryFieldIDs.includes(f.propertyName))
                    .map(f => <Pill key={`pill-${f.propertyName}`} filter={f} linkMode={false} />)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatelogueFilter;
