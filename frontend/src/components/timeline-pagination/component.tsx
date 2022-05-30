import { FC } from 'react';

import cx from 'classnames';

import Button from 'components/button';

import { TimelinePaginationProps } from './types';

export const TimelinePagination: FC<TimelinePaginationProps> = ({
  steps,
  currentStep,
  onClickStep,
}: TimelinePaginationProps) => (
  <div className="px-9 sm:px-16 sm:pt-16 xl:pt-11">
    <nav
      role="navigation"
      className={cx({
        'relative pr-1.5 border-b-4 border-b-green-light after:block after:absolute after:bottom-0 after:translate-y-full after-left-0 after:h-1 after:bg-green after:transition-all':
          true,
        'after:w-0': currentStep === 0,
        'after:w-1/2': steps.length === 3 && currentStep === 1,
        'after:w-1/3': steps.length === 4 && currentStep === 1,
        'after:w-2/3': steps.length === 4 && currentStep === 2,
        'after:w-full': currentStep + 1 === steps.length,
      })}
    >
      <div className="mb-10 text-xl font-bold text-center sm:hidden text-green">
        {steps[currentStep].name}
      </div>
      <ol className="flex items-center justify-between">
        {steps.map((step, index) => (
          <li
            key={step.name}
            aria-current={index === currentStep ? 'page' : undefined}
            className="relative top-0.5"
          >
            <Button
              theme="naked"
              className={cx({
                'absolute -top-3 left-0 -translate-x-1/2 -translate-y-full before:block before:absolute z-10 before:-bottom-3 before:left-1/2 before:translate-y-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:rounded-full before:transition xl:whitespace-nowrap focus-visible:outline-green pt-0 pb-0 pl-0 pr:0 sm:pt-2 sm:pb-2 sm:pl-5 sm:pr-5':
                  true,
                'before:bg-green-light': currentStep < index,
                'before:bg-green': currentStep >= index,
                'after:animate-ping after:block sm:after:hidden after:absolute z-10 after:top-1.5 after:left-1 after:w-3 after:h-3 after:rounded-full after:transition after:bg-green':
                  currentStep === 0 && index === 1,
              })}
              onClick={() => onClickStep(index)}
            >
              <span className="text-base font-bold sr-only sm:not-sr-only text-green">
                {step.name}
              </span>
            </Button>
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

export default TimelinePagination;
