import { FC, useEffect, useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import Input from 'components/forms/input';
import Radio from 'components/forms/radio';
import Select from 'components/forms/select';
import TimelinePagination from 'components/timeline-pagination';
import { filtersActions, filtersSelectors } from 'modules';
import { FilterTypes } from 'types';

import { CATEGORIES } from 'services/catalog';

import { SubStepsProps } from './types';

export const SubSteps: FC<SubStepsProps> = ({ category, steps }) => {
  const [stepIndex, setStepIndex] = useState(0);
  // If the number of steps have decreased and the current index is out of bounds, we force the
  // index to 0. The `useEffect` below will properly move the index to 0 after a first render.
  const step = steps[stepIndex >= steps.length ? 0 : stepIndex];

  const filters = useAppSelector(filtersSelectors.selectFilters);
  const dispatch = useAppDispatch();

  const fields = useMemo(() => {
    const categoryFields = CATEGORIES.find((c) => c.id === category).fields;

    return step.fields
      .map((fieldId) => categoryFields.find((field) => field.id === fieldId))
      .filter((field) => !!field)
      .map((field) => ({
        ...field,
        filterValue: filters.find((f) => f.field === field.id)?.value,
      }));
  }, [step, category, filters]);

  useEffect(() => {
    setStepIndex(0);
  }, [category, steps]);

  return (
    <>
      <TimelinePagination
        steps={steps}
        currentStep={stepIndex}
        onClickStep={(index) => setStepIndex(index)}
      />
      <p className="max-w-lg mt-7 text-green">{step.description}</p>
      <div className="flex items-start gap-3 mt-4">
        {fields.map((field) => (
          <div key={field.id}>
            {field.type === FilterTypes.String && (
              <div>
                <label htmlFor={field.id} className="text-xs font-semibold uppercase text-green">
                  {field.label}
                </label>
                <Select
                  id={field.id}
                  options={[]}
                  placeholder="Choose one item"
                  value={field.filterValue as string}
                  onChange={({ value }) => {
                    const filter = { field: field.id, value: value };
                    dispatch(filtersActions.addFilter(filter));
                  }}
                  className="mt-2 invalid:border-red"
                />
              </div>
            )}
            {field.type === FilterTypes.Boolean && (
              <fieldset>
                <legend className="text-xs font-semibold uppercase text-green">
                  {field.label}
                </legend>
                <div className="flex items-start gap-3 mt-2">
                  <Radio
                    id="yes-radio"
                    theme="toggle"
                    name={field.id}
                    checked={field.filterValue === true}
                    onChange={() => {
                      const filter = { field: field.id, value: true };
                      dispatch(filtersActions.addFilter(filter));
                    }}
                  >
                    Yes
                  </Radio>
                  <Radio
                    id="no-radio"
                    theme="toggle"
                    name={field.id}
                    checked={field.filterValue === false}
                    onChange={() => {
                      const filter = { field: field.id, value: false };
                      dispatch(filtersActions.addFilter(filter));
                    }}
                  >
                    No
                  </Radio>
                </div>
              </fieldset>
            )}
            {field.type === FilterTypes.Year && (
              <div>
                <label htmlFor={field.id} className="text-xs font-semibold uppercase text-green">
                  {field.label}
                </label>
                <Input
                  id={field.id}
                  name={field.id}
                  type="number"
                  pattern="\d{4}"
                  value={(field.filterValue as number) ?? ''}
                  onChange={(year) => {
                    const isValid =
                      year.length === 0 || (year > 2000 && year < new Date().getFullYear());

                    if (isValid) {
                      const filter = { field: field.id, value: year.length === 0 ? null : +year };
                      dispatch(filtersActions.removeFilter(filter));

                      if (filter.value !== null) {
                        dispatch(filtersActions.addFilter(filter));
                      }
                    }
                  }}
                  min={2000}
                  max={new Date().getFullYear()}
                  className="mt-2 invalid:border-red"
                  aria-describedby={`${field.id}-description`}
                />
                <p id={`${field.id}-description`} className="mt-1 text-xs text-grey-dark">
                  Value between 2000 and {new Date().getFullYear()}
                </p>
              </div>
            )}
            {field.type === FilterTypes.Number && (
              <div>
                <label htmlFor={field.id} className="text-xs font-semibold uppercase text-green">
                  {field.label}
                </label>
                <Input
                  id={field.id}
                  name={field.id}
                  type="number"
                  pattern="\d*"
                  value={(field.filterValue as number) ?? ''}
                  onChange={(value) => {
                    const filter = { field: field.id, value: value.length === 0 ? null : +value };
                    dispatch(filtersActions.removeFilter(filter));

                    if (filter.value !== null) {
                      dispatch(filtersActions.addFilter(filter));
                    }
                  }}
                  step={1}
                  className="mt-2 invalid:border-red"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SubSteps;
