import { FC, useEffect, useMemo, useState } from 'react';

import { useAppSelector } from 'hooks/redux';

import TimelinePagination from 'components/timeline-pagination';
import { filtersSelectors } from 'modules';
import { FilterTypes } from 'types';

import { CATEGORIES } from 'services/catalog';

import BooleanFilter from './boolean-filter';
import NumberFilter from './number-filter';
import StringFilter from './string-filter';
import { SubStepsProps } from './types';
import YearFilter from './year-filter';

export const SubSteps: FC<SubStepsProps> = ({ category, steps }) => {
  const [stepIndex, setStepIndex] = useState(0);
  // If the number of steps have decreased and the current index is out of bounds, we force the
  // index to 0. The `useEffect` below will properly move the index to 0 after a first render.
  const step = steps[stepIndex >= steps.length ? 0 : stepIndex];

  const filters = useAppSelector(filtersSelectors.selectFilters);

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
              <StringFilter
                field={field}
                filterValue={field.filterValue as string}
                event={['Apply filter in guidance']}
              />
            )}
            {field.type === FilterTypes.Boolean && (
              <BooleanFilter
                field={field}
                filterValue={field.filterValue as boolean}
                event={['Apply filter in guidance']}
              />
            )}
            {field.type === FilterTypes.Year && (
              <YearFilter
                field={field}
                filterValue={field.filterValue as number}
                event={['Apply filter in guidance']}
              />
            )}
            {field.type === FilterTypes.Number && (
              <NumberFilter
                field={field}
                filterValue={field.filterValue as number}
                event={['Apply filter in guidance']}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SubSteps;
