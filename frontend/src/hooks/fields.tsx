import LoadingSpinner from 'components/loading-spinner';
import { Field, Filter, FilterTypes } from 'types';
import { toTitleCase } from 'utils/misc';

import { getFieldByID } from 'services/catalog';

import { useEnums } from './enums';

export const useField = (fieldId: Field['id']) => {
  return getFieldByID(fieldId);
};

export const useFormatFieldValue = (field: Field, value: string | number | boolean | number[]) => {
  const { isLoading, isError, data } = useEnums();

  if (!field) {
    return '−';
  }

  if (field.type === FilterTypes.String) {
    if (isError) {
      return '−';
    }

    if (isLoading) {
      return (
        <div className="inline-block">
          <LoadingSpinner inline mini transparent />
        </div>
      );
    }

    const match = data.find((e) => e.name === field.id);
    if (!match) {
      return '−';
    }

    const names = Object.entries(match.data)
      .filter(([, v]) =>
        Array.isArray(value)
          ? value.find((item) => `${item}` === `${v}`) !== undefined
          : `${v}` === `${value}`
      )
      .map((entry) => entry[0]);

    if (names.length === 0) {
      return '−';
    }

    return names.map((name) => toTitleCase(name)).join(', ');
  }

  return value.toString();
};
