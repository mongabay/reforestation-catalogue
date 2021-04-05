import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import Select from 'components/forms/select';

// utils
import { UNIQUE_COUNTRIES } from 'services/catalogue';

// styles
import './style.scss';

function CatalogueFilter({
  country,
  organizationType
}) {
  const [countrySelected, setCountrySelected] = useState(country);

  console.log('countrySelected', countrySelected);

  return (
    <div className="c-catalogue-filter">
      <div className="country-container">
        <label for="country-select">Where?</label>
        <Select
          id="country-select"
          options={UNIQUE_COUNTRIES.map(e => ({ value: e, label: e }))}
          initialValue={countrySelected}
          onChange={(value) => setCountrySelected(value)}
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