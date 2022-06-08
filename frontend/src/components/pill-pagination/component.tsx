import { FC } from 'react';

import Button from 'components/button';

import { PillPaginationProps } from './types';

export const PillPagination: FC<PillPaginationProps> = ({
  steps,
  currentStep,
  onClickStep,
}: PillPaginationProps) => (
  <nav role="navigation">
    <ol className="flex items-center w-full gap-3 p-1 overflow-x-auto">
      {steps.map((step, index) => (
        <li key={step.name} aria-current={index === currentStep ? 'page' : undefined}>
          {index === currentStep && (
            <Button
              theme="light-green"
              className="justify-center"
              onClick={() => onClickStep(index)}
            >
              <span className="font-serif text-2xl font-bold pl-14 pr-14">{step.name}</span>
            </Button>
          )}
          {index !== currentStep && (
            <Button
              theme="light-green"
              className="justify-center pt-1 pb-1 pl-1 pr-1 w-7"
              onClick={() => onClickStep(index)}
              title={step.name}
            >
              {index + 1}
            </Button>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default PillPagination;
