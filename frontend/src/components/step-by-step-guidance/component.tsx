import { FC, useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import Button from 'components/button';
import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';
import Modal from 'components/modal';
import PillPagination from 'components/pill-pagination';

import LeftArrowIcon from 'svgs/left-arrow.svg';

import { STEPS } from './constants';
import FiltersList from './filters-list';
import ResultsCount from './results-count';
import SubSteps from './sub-steps';
import { StepByStepGuidanceProps } from './types';

export const StepByStepGuidance: FC<StepByStepGuidanceProps> = ({
  open,
  onDismiss,
  setIsFiltersOpen,
}) => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = STEPS[stepIndex];

  const onPrevious = useCallback(() => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  }, [stepIndex, setStepIndex]);

  const onNext = useCallback(() => {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  }, [stepIndex, setStepIndex]);

  // When the step changes, we make sure to scroll at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  return (
    <Modal title="Filters guide" open={open} onDismiss={onDismiss}>
      <LayoutContainer className="lg:w-[calc(1024px_-_15%)] xl:w-[calc(1280px_-_15%)] 2xl:w-[calc(1536px_-_15%)] lg:mr-[15%] py-12 md:py-20">
        <h1 className="text-[54px]">Filtering organizations</h1>
        <div className="lg:pr-24">
          <div className="max-w-lg">
            <PillPagination
              steps={STEPS.map((step) => ({ name: step.name }))}
              currentStep={stepIndex}
              onClickStep={(index) => setStepIndex(index)}
            />
            <p className="mt-8 text-lg font-semibold text-green">{step.description}</p>
          </div>
          <div className="mt-14">
            <SubSteps key={step.category} category={step.category} steps={step.steps} />
          </div>
          <FiltersList className="mt-4" />
          <ResultsCount className="mt-11" onNavigateToCatalog={() => setIsFiltersOpen(false)} />
          <div className="relative flex flex-col justify-between max-w-4xl gap-4 mx-auto mt-9 sm:flex-row sm:gap-14">
            {stepIndex > 0 ? (
              <Button
                theme="light-green"
                onClick={onPrevious}
                className="items-center pt-1 pb-1 min-w-[185px]"
              >
                <Icon icon={LeftArrowIcon} aria-hidden className="w-3 mr-2" />
                <span className="mr-5 text-2xl font-semibold">{stepIndex}</span>
                <span className="sr-only">Go to </span>
                {STEPS[stepIndex - 1].name}
              </Button>
            ) : (
              <div />
            )}
            {stepIndex < STEPS.length - 1 && (
              <Button
                theme="light-green"
                onClick={onNext}
                className="items-center justify-end pt-1 pb-1 min-w-[185px]"
              >
                <span className="sr-only">Go to </span>
                {STEPS[stepIndex + 1].name}
                <span className="ml-5 text-2xl font-semibold">{stepIndex + 2}</span>
                <Icon icon={LeftArrowIcon} aria-hidden className="w-3 ml-2 rotate-180" />
              </Button>
            )}
          </div>
        </div>
      </LayoutContainer>
    </Modal>
  );
};

export default StepByStepGuidance;
