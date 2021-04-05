import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import Select from 'components/forms/select';
import Radio from 'components/forms/radio';

// utils
import {
  UNIQUE_COUNTRIES,
  getOrganizationTypesFiltered,
  getObjectivesFiltered,
  getApproachesFiltered,
} from 'services/catalogue';

// styles
import './style.scss';

function CatalogueFilter({
  country,
  organizationType,
  objective,
  approach,
  genderCommunityInvolvement,
  onChange,
}) {
  const [filters, setFilters] = useState({
    country,
    organizationType,
    objective,
    approach,
    genderCommunityInvolvement,
  });

  return (
    <div className="c-catalogue-filter">
      <div className="-country filter-container">
        <label htmlFor="country-select">Where?</label>
        <Select
          id="country-select"
          options={UNIQUE_COUNTRIES.map(e => ({ value: e, label: e }))}
          defaultValue={filters.country}
          onChange={({ value }) => {
            const filtersUpdated = { ...filters, country: value };
            setFilters(filtersUpdated);
            onChange(filtersUpdated);
          }}
        />
      </div>
      {filters.country && (
        <div className="-organization-type filter-container">
          <label htmlFor="organization-type-select">Organization Type?</label>
          <Select
            id="organization-type-select"
            options={getOrganizationTypesFiltered(filters).map(e => ({ value: e, label: e }))}
            defaultValue={filters.organizationType}
            onChange={({ value }) => {
              const filtersUpdated = { ...filters, organizationType: value };
              setFilters(filtersUpdated);
              onChange(filtersUpdated);
            }}
          />
        </div>
      )}
      {filters.organizationType && (
        <div className="-objective filter-container">
          <label htmlFor="objective-select">Objective?</label>
          <Select
            id="objective-select"
            options={getObjectivesFiltered(filters).map(e => ({ value: e, label: e }))}
            defaultValue={filters.objective}
            onChange={({ value }) => {
              const filtersUpdated = { ...filters, objective: value };
              setFilters(filtersUpdated);
              onChange(filtersUpdated);
            }}
          />
        </div>
      )}
      {filters.objective && (
        <div className="-approach filter-container">
          <label htmlFor="approach-select">Approach?</label>
          <Select
            id="approach-select"
            options={getApproachesFiltered(filters).map(e => ({ value: e, label: e }))}
            defaultValue={filters.approach}
            onChange={({ value }) => {
              const filtersUpdated = { ...filters, approach: value };
              setFilters(filtersUpdated);
              onChange(filtersUpdated);
            }}
          />
        </div>
      )}
      {filters.approach && (
        <div className="-gender-community-involvement filter-container">
          <label htmlFor="gender-community-involvement-radio">
            Gender or Community Involvement?
          </label>
          <Radio 
            id="yes-radio" 
            name="gender-community-involvement-radio"
            checked={filters.genderCommunityInvolvement === 'YES'}
            onChange={() => {
              const filtersUpdated = { ...filters, genderCommunityInvolvement: 'YES' };
              setFilters(filtersUpdated);
              onChange(filtersUpdated);
            }}
          >
            YES
          </Radio>
          <Radio
            id="no-radio"
            name="gender-community-involvement-radio"
            checked={filters.genderCommunityInvolvement === 'NO'}
            onChange={() => {
              const filtersUpdated = { ...filters, genderCommunityInvolvement: 'NO' };
              setFilters(filtersUpdated);
              onChange(filtersUpdated);
            }}
          >
            NO
          </Radio>
        </div>
      )}
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
};

export default CatalogueFilter;