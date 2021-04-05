import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import Select from 'components/forms/select';

// utils
import { UNIQUE_COUNTRIES, UNIQUE_ORGANIZATION_TYPES } from 'services/catalogue';

// styles
import './style.scss';

function CatalogueFilter({ country, organizationType }) {
  const [countrySelected, setCountrySelected] = useState(country);
  const [organizationTypeSelected, setOrganizationTypeSelected] = useState(organizationType);

  console.log('countrySelected', countrySelected);

  return (
    <div className="c-catalogue-filter">
      <div className="-country filter-container">
        <label htmlFor="country-select">Where?</label>
        <Select
          id="country-select"
          options={UNIQUE_COUNTRIES.map(e => ({ value: e, label: e }))}
          defaultValue={countrySelected}
          onChange={({ value }) => setCountrySelected(value)}
        />
      </div>
      <div className="-organization-type filter-container">
        <label htmlFor="organization-type-select">Organization Type?</label>
        <Select
          id="organization-type-select"
          options={UNIQUE_ORGANIZATION_TYPES.map(e => ({ value: e, label: e }))}
          defaultValue={organizationTypeSelected}
          onChange={({ value }) => setOrganizationTypeSelected(value)}
        />
      </div>
    </div>
  );
}

CatalogueFilter.propTypes = {
  country: PropTypes.string,
  organizationType: PropTypes.string
};

export default CatalogueFilter;