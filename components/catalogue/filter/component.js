import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import Select from 'components/forms/select';
import Radio from 'components/forms/radio';

// utils
import {
  CATEGORIES
} from 'services/catalogue';

// styles
import './style.scss';

function CatalogueFilter({
  onChange,
  onCategoryChange
}) {
  const [filters, setFilters] = useState({});
  const [priority, setPriority] = useState(CATEGORIES[0].id);

  return (
    <div className="c-catalogue-filter">
      <div className="-priority filter-container">
        <label htmlFor="priority-select">Priority</label>
        <Select
          id="priority-select"
          options={CATEGORIES.map(c => ({ label: c.id, value: c.id }))}
          defaultValue={priority}
          onChange={({ value }) => {
            console.log('value', value);
            setPriority(value);
            onCategoryChange(value);
            onChange([]);
          }}
        />
      </div>
      {CATEGORIES.find(c => c.id === priority).fields.map(field => (
        <div className="filter-container">
          <label htmlFor={`${field.id}-select`}>{field.id}</label>
          <Select
            id={`${field.id}-select`}
            options={[]}
            onChange={({ value }) => {

            }}
          />
        </div>
      ))}
    </div>
  );
}

CatalogueFilter.propTypes = {
  country: PropTypes.string,
  organizationType: PropTypes.string,
  objective: PropTypes.string,
  approach: PropTypes.string,
  genderCommunityInvolvement: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  sequential: PropTypes.bool,
};

CatalogueFilter.defaultProps = {
  sequential: true,
};

export default CatalogueFilter;
