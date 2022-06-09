import { FC, FormEvent, useCallback, useRef, useState } from 'react';

import { useCreateProject, useUpdateProject } from 'hooks/projects';

import Button from 'components/button';
import Icon from 'components/icon';
import LoadingSpinner from 'components/loading-spinner';
import { ProjectFormData } from 'types';

import AlertIcon from 'svgs/alert.svg';
import CheckIcon from 'svgs/check.svg';
import LeftArrowIcon from 'svgs/left-arrow.svg';

import { PROJECT_FORM_STEPS } from './constants';
import { getFormValues } from './helpers';
import { ProjectFormProps } from './types';

type GetProps<C> = C extends FC<infer P> ? P : never;

export const ProjectForm: FC<ProjectFormProps> = ({ project }: ProjectFormProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = PROJECT_FORM_STEPS[stepIndex];
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
    console.log(values);

    if (stepIndex > 0) {
      setValues((v) => ({ ...v, ...values }));
      setStepIndex(stepIndex - 1);
      // The `setTimeout` is required on Firefox to scroll the page
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    }
  }, [stepIndex, formRef, setStepIndex]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newValues = getFormValues(formRef);
      const data = { ...values, ...newValues };
      console.log(data);
      setValues(data);

      if (stepIndex < PROJECT_FORM_STEPS.length - 1) {
        setStepIndex(stepIndex + 1);
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
    [values, stepIndex, setStepIndex, project, updateProject, createProject]
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
          <div className="p-4 mb-14 bg-green/10 rounded-2xl">
            <p className="font-semibold">
              <Icon
                icon={CheckIcon}
                aria-hidden
                className="inline-block w-6 h-6 mr-2 align-text-top text-green"
              />
              Data submitted! Thank you for contributing.
            </p>
            <p className="mt-2 text-sm">
              Mongabay will review your submission before making it public.
            </p>
          </div>
        )}
        <h2 className="font-serif text-3xl text-center">{step.name}</h2>
        <p className="mt-4 text-center">{step.description}</p>
      </div>
      <form ref={formRef} onSubmit={onSubmit} className="mt-10 sm:mt-14">
        <div className="max-w-lg mx-auto">
          <step.Component values={values} />
        </div>
        <div className="relative flex flex-col justify-between max-w-4xl mx-auto mt-10 sm:flex-row md:mt-16">
          {stepIndex > 0 ? (
            <Button
              theme="link-primary"
              onClick={onPrevious}
              className="items-center"
              disabled={isLoading}
            >
              <Icon icon={LeftArrowIcon} aria-hidden className="h-3 mr-2" />
              <span className="sr-only">Go to </span>
              {PROJECT_FORM_STEPS[stepIndex - 1].name}
            </Button>
          ) : (
            <div />
          )}
          <div className="my-2 text-sm font-semibold text-center sm:my-0 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:absolute text-grey-medium top-1/2 left-1/2">
            Page {stepIndex + 1} out of {PROJECT_FORM_STEPS.length}
          </div>
          <Button
            theme={stepIndex < PROJECT_FORM_STEPS.length - 1 ? 'link-primary' : 'primary-green'}
            type="submit"
            className="items-center"
            disabled={isLoading}
          >
            {isLoading && (
              <div className="inline-block mr-2">
                <LoadingSpinner inline mini transparent invertColor />
              </div>
            )}
            {stepIndex < PROJECT_FORM_STEPS.length - 1 && (
              <>
                <span className="sr-only">Go to </span>
                {PROJECT_FORM_STEPS[stepIndex + 1].name}
                <Icon icon={LeftArrowIcon} aria-hidden className="h-3 ml-2 rotate-180" />
              </>
            )}
            {stepIndex === PROJECT_FORM_STEPS.length - 1 && 'Submit'}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
