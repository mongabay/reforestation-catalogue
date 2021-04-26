import React, { useState } from 'react';

import { CATEGORIES } from 'services/catalogue';
import { CatelogueFilterProps } from './types';

import './style.scss';
import { Filter, FilterTypes } from 'types';
import { Radio, Select } from 'components/forms';
import Pill from 'components/pill/component';
import { getUniqueValuesForField } from 'utils/project';

const CatelogueFilter: React.FC<CatelogueFilterProps> = ({
  filters,
  projects,
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
              console.log('chante!', value);
            }}
          />
        </div>
      );
    }
  };

  return (
    <div className="c-catalogue-filter">
      {CATEGORIES.map(c => {
        const categoryFieldIDs = c.fields.map(cf => cf.id);

        return (
          <div key={`category-${c.id}`} className="category-container">
            <div className="title">
              <div className="info-button">
                <img src="icons/info.svg" />
              </div>
              <div className="-bold category-label"> {`${c.label}:`}</div>
            </div>
            <div className="filters-section">
              <Select
                className="filter-selector"
                defaultValue={null}
                onChange={({ value }) => {
                  const { type, commaSeparated } = CATEGORIES.find(
                    elem => elem.id === c.id
                  ).fields.find(f => f.id === value);
                  setFilterSelected({
                    category: c.id,
                    value,
                    type,
                    commaSeparated: commaSeparated,
                  });
                }}
                options={c.fields
                  .filter(f => !f.hidden)
                  .map(f => ({
                    label: f.label,
                    value: f.id,
                    type: f.type,
                    commaSeparated: f.commaSeparated,
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
                    .map(f => <Pill key={`pill-${f.propertyName}`} filter={f} />)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatelogueFilter;
