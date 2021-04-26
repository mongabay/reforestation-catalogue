import React, { useState } from 'react';

import { CATEGORIES } from 'services/catalogue';
import { CatelogueFilterProps } from './types';

import './style.scss';
import { FilterTypes } from 'types';
import { Radio, Select } from 'components/forms';

const CatelogueFilter: React.FC<CatelogueFilterProps> = ({
  filters,
  addFilter,
}: CatelogueFilterProps) => {
  const [filterSelected, setFilterSelected] = useState(null);

  return (
    <div className="c-catalogue-filter">
      {CATEGORIES.map(c => (
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
              onChange={({ value }) => setFilterSelected(value)}
              options={c.fields.map(f => ({ label: f.label, value: f.id }))}
              showSelectAnOption={true}
              selectAnOptionText="Add filter"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatelogueFilter;
