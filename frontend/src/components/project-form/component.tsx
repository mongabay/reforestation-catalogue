import { FC, FormEvent, useCallback, useRef, useState } from 'react';

import { useCreateProject, useUpdateProject } from 'hooks/projects';

import Button from 'components/button';
import Icon from 'components/icon';
import LoadingSpinner from 'components/loading-spinner';
import { ProjectFormData } from 'types';

import AlertIcon from 'svgs/alert.svg';
import CheckIcon from 'svgs/check.svg';
import LeftArrowIcon from 'svgs/left-arrow.svg';

import { getFormValues } from './helpers';
import { ProjectFormProps } from './types';

type GetProps<C> = C extends FC<infer P> ? P : never;

export const ProjectForm: FC<ProjectFormProps> = ({
  steps,
  currentStep,
  project,
  onChangeStep,
}: ProjectFormProps) => {
  const step = steps[currentStep];
  const [values, setValues] = useState<Partial<ProjectFormData>>(project ?? {});

  const formRef = useRef<HTMLFormElement>();

  const {
    mutate: createProject,
    isLoading: createIsLoading,
    isError: createIsError,
    isSuccess: createIsSuccess,
  } = useCreateProject();

  const {
    mutate: updateProject,
    isLoading: updateIsLoading,
    isError: updateIsError,
    isSuccess: updateIsSuccess,
  } = useUpdateProject();

  const isLoading = createIsLoading || updateIsLoading;
  const isError = createIsError || updateIsError;
  const isSuccess = createIsSuccess || updateIsSuccess;

  const onPrevious = useCallback(() => {
    const values = getFormValues(formRef);

    if (currentStep > 0) {
      setValues((v) => ({ ...v, ...values }));
      onChangeStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, formRef, onChangeStep]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newValues = getFormValues(formRef);
      const data = { ...values, ...newValues };
      setValues(data);

      if (currentStep < steps.length - 1) {
        onChangeStep(currentStep + 1);
        // The `setTimeout` is required on Firefox to scroll the page
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
      } else {
        const callbacks = {
          onError: () => {
            // The `setTimeout` is required on Firefox to scroll the page
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
          },
          onSuccess: () => {
            // The `setTimeout` is required on Firefox to scroll the page
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
          },
        };

        if (project) {
          updateProject({ id: project.id, values: data as ProjectFormData }, callbacks);
        } else {
          createProject(data as ProjectFormData, callbacks);
        }
      }
    },
    [values, currentStep, steps, onChangeStep, project, updateProject, createProject]
  );

  return (
    <>
      <div className="max-w-lg mx-auto">
        {isError && (
          <p className="p-4 font-semibold mb-14 bg-red/10 rounded-2xl">
            <Icon
              icon={AlertIcon}
              aria-hidden
              className="inline-block w-6 h-6 mr-2 align-text-top text-red"
            />
            Unable to submit the data. Please retry later.
          </p>
        )}
        {isSuccess && (
          <p className="p-4 font-semibold mb-14 bg-green/10 rounded-2xl">
            <Icon
              icon={CheckIcon}
              aria-hidden
              className="inline-block w-6 h-6 mr-2 align-text-top text-green"
            />
            Data submitted! Thank you for contributing.
          </p>
        )}
        <h2 className="font-serif text-3xl text-center">{step.name}</h2>
        <p className="mt-4 text-center">{step.description}</p>
      </div>
      <form ref={formRef} onSubmit={onSubmit} className="mt-14">
        <div className="max-w-lg mx-auto">
          <step.Component values={values} />
        </div>
        <div className="relative flex justify-between max-w-4xl mx-auto mt-10 md:mt-16">
          {currentStep > 0 ? (
            <Button
              theme="link-primary"
              onClick={onPrevious}
              className="items-center"
              disabled={isLoading}
            >
              <Icon icon={LeftArrowIcon} aria-hidden className="h-3 mr-2" />
              <span className="sr-only">Go to </span>
              {steps[currentStep - 1].name}
            </Button>
          ) : (
            <div />
          )}
          <div className="absolute text-sm font-semibold -translate-x-1/2 -translate-y-1/2 text-grey-medium top-1/2 left-1/2">
            Page {currentStep + 1} out of {steps.length}
          </div>
          <Button
            theme={currentStep < steps.length - 1 ? 'link-primary' : 'primary-green'}
            type="submit"
            className="items-center"
            disabled={isLoading}
          >
            {isLoading && (
              <div className="inline-block mr-2">
                <LoadingSpinner inline mini transparent invertColor />
              </div>
            )}
            {currentStep < steps.length - 1 && (
              <>
                <span className="sr-only">Go to </span>
                {steps[currentStep + 1].name}
                <Icon icon={LeftArrowIcon} aria-hidden className="h-3 ml-2 rotate-180" />
              </>
            )}
            {currentStep === steps.length - 1 && 'Submit'}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
