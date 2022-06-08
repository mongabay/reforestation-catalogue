import { FC, useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import Button from 'components/button';
import Icon from 'components/icon';
import LayoutContainer from 'components/layout-container';
import NewsletterSignup from 'components/newsletter-signup';
import PillPagination from 'components/pill-pagination';

import LeftArrowIcon from 'svgs/left-arrow.svg';

import { STEPS } from './constants';
import FiltersList from './filters-list';
import ResultsCount from './results-count';
import SubSteps from './sub-steps';
import { StepByStepGuidanceProps } from './types';

export const StepByStepGuidance: FC<StepByStepGuidanceProps> = ({ onNavigateToCatalog }) => {
  const [showNewsletterSignup, setShowNewsletterSignup] = useState(false);
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
    <>
      <NewsletterSignup
        open={showNewsletterSignup}
        onDismiss={() => setShowNewsletterSignup(false)}
      />
      <div className="flex-grow overflow-y-auto lg:relative">
        <LayoutContainer className="lg:w-[calc(1024px_-_25%)] xl:w-[calc(1280px_-_25%)] 2xl:w-[calc(1536px_-_25%)] lg:mr-[25%] py-12 md:py-20">
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
              <SubSteps
                // The `key` forces the unmounting/mounting of the component when the category changes
                // This is to avoid issues where an animation is made when changing category and a
                // possible out-of-bound error.
                key={step.category}
                category={step.category}
                steps={step.steps}
              />
            </div>
            <FiltersList className="mt-4" />
            <ResultsCount className="mt-11" onNavigateToCatalog={onNavigateToCatalog} />
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
                  <span className="ml-5 text-2xl font-semibold">{stepIndex + 1}</span>
                  <Icon icon={LeftArrowIcon} aria-hidden className="w-3 ml-2 rotate-180" />
                </Button>
              )}
            </div>
          </div>
        </LayoutContainer>

        <div className="py-12 text-white bg-orange">
          <LayoutContainer className="lg:w-[calc(1024px_-_25%)] xl:w-[calc(1280px_-_25%)] 2xl:w-[calc(1536px_-_25%)] lg:mr-[25%]">
            <div className="lg:pr-24">
              <p className="max-w-3xl font-serif text-3xl font-bold md:leading-tight">
                Subscribe to our newsletter to find out about reforestation projects, original
                stories, activism awareness and more.
              </p>
              <Button
                theme="primary-white"
                onClick={() => setShowNewsletterSignup(true)}
                className="justify-center mt-10 md:inline-flex md:px-12"
              >
                <span className="text-orange">Subscribe</span>
              </Button>
            </div>
          </LayoutContainer>
        </div>

        <div className="relative hidden w-full lg:block lg:fixed lg:inset-y-0 lg:right-0 lg:w-1/4 lg:h-full">
          <div className="absolute inset-0 object-cover w-full h-full">
            <Image layout="fill" objectFit="cover" src={step.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StepByStepGuidance;
