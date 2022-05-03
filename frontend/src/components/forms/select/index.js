import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

const Select = ({
  id,
  options,
  defaultValue,
  value,
  onChange,
  disabled,
  'aria-label': ariaLabel,
  className,
  required,
  showSelectAnOption,
  selectAnOptionText,
}) => {
  const onChangeSelect = useCallback(
    (e) => {
      const option = options.find((option) => option.value === e.target.selectedOptions[0].value);
      onChange(option);
    },
    [options, onChange]
  );

  return (
    <select
      id={id}
      className={['c-select', 'custom-select', ...(className ? [className] : [])].join(' ')}
      disabled={disabled}
      aria-label={ariaLabel}
      defaultValue={defaultValue}
      value={value}
      onChange={onChangeSelect}
      required={required}
    >
      {showSelectAnOption && (
        <option disabled selected>
          {selectAnOptionText}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  showSelectAnOption: PropTypes.bool,
  selectAnOptionText: PropTypes.string,
};

Select.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  onChange: () => null,
  disabled: false,
  'aria-label': null,
  className: undefined,
  required: false,
  showSelectAnOption: false,
  selectAnOptionText: '-- select an option --',
};

export default Select;
