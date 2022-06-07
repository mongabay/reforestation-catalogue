import { FC, useState } from 'react';

import cx from 'classnames';

import { useEnumOptions } from 'hooks/enums';

import Button from 'components/button';
import Checkbox from 'components/forms/checkbox';
import Input from 'components/forms/input';
import Radio from 'components/forms/radio';
import Icon from 'components/icon';
import Tooltip from 'components/tooltip';
import { Project } from 'types';

import PlusIcon from 'svgs/plus.svg';
import TrashIcon from 'svgs/trash.svg';

import { ContextStepProps } from './types';

export const ContextStep: FC<ContextStepProps> = ({ values }: ContextStepProps) => {
  const [relatedLinks, setRelatedLinks] = useState<Project['project_links']>(
    values.project_links ?? []
  );

  const { data: whoIsInvolvedOptions } = useEnumOptions('who_is_involved');
  const { data: primaryObjectivePurposeOptions } = useEnumOptions('primary_objective_purpose');
  const { data: approachOptions } = useEnumOptions('approach');

  return (
    <>
      <div>
        <label htmlFor="project-name" className="font-semibold">
          Project name{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </label>
        <Input
          id="project-name"
          name="project_name"
          type="text"
          placeholder="Type your answer"
          defaultValue={values.project_name}
          className="mt-3"
          required
        />
      </div>
      <div className="mt-7">
        <label htmlFor="lead-organization" className="font-semibold">
          Lead organization
        </label>
        <Input
          id="lead-organization"
          name="lead_organization"
          type="text"
          placeholder="Type your answer"
          defaultValue={values.lead_organization}
          className="mt-3"
        />
      </div>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">{"Who's involved?"}</legend>
        {whoIsInvolvedOptions.map((option) => (
          <Checkbox
            key={option.value}
            id={`who_is_involved_${option.value}`}
            value={`${option.value}`}
            defaultChecked={values.who_is_involved?.includes(option.value)}
            name="who_is_involved"
          >
            {option.label}
          </Checkbox>
        ))}
      </fieldset>
      <div className="flex flex-col sm:flex-row mt-7 gap-7 sm:gap-11">
        <div className="flex-grow">
          <label htmlFor="start-year" className="font-semibold">
            Start year
          </label>
          <Input
            id="start-year"
            name="start_year"
            type="number"
            step={1}
            placeholder="Type your answer"
            defaultValue={values.start_year}
            className="mt-3"
          />
        </div>
        <div className="flex-grow">
          <label htmlFor="end-year" className="font-semibold">
            End year
          </label>
          <Input
            id="end-year"
            name="end_year"
            type="number"
            step={1}
            placeholder="Type your answer"
            defaultValue={values.end_year}
            className="mt-3"
          />
        </div>
      </div>
      <div className="mt-7">
        <label htmlFor="country" className="font-semibold">
          Country
        </label>
        <p id="country-description" className="mt-2">
          The name of the country where the project is located
        </p>
        <Input
          id="country"
          name="country"
          type="text"
          placeholder="Type your answer"
          defaultValue={values.country}
          className="mt-1"
          aria-describedby="country-description"
        />
      </div>
      <div className="mt-7">
        <label htmlFor="project-org-url" className="font-semibold">
          Project/Org. URL{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </label>
        <Input
          id="project-org-url"
          name="project_org_url"
          // The reason we use a type text here and then a pattern is that if we were to use a type
          // url, the validation would require the user to enter the full URL including http(s) at the
          // beginning. This is not what the user is expecting so we're providing a custom validation
          // instead.
          type="text"
          data-type="url"
          // This regex is very simple and permissive. Its goal is to prevent mistakes, not to
          // validate. Proper validation must be implemented in the back-end.
          pattern="^(https?:\/\/)?[^\s]+\.[^\s\.]{2,}$"
          placeholder="Type your answer"
          defaultValue={values.project_org_url}
          className="mt-3"
          required
        />
      </div>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">Other project related links</legend>
        {!values.project_links?.length && relatedLinks.length === 0 && (
          <div className="py-4 border px-7 border-grey-dark/20 rounded-2xl">None</div>
        )}
        {relatedLinks.map((link, index) => (
          <fieldset
            key={index}
            className={cx({
              'relative py-4 pt-6 px-4 sm:px-7 border border-grey-dark/20 rounded-2xl': true,
              'mt-6': index > 0,
            })}
          >
            <legend className="sr-only">Link {index + 1}</legend>
            <Button
              className="absolute pt-2 pb-2 pl-2 pr-2 top-3 right-3"
              onClick={() => setRelatedLinks((links) => links.filter((link, i) => i !== index))}
            >
              <span className="sr-only">Remove link</span>
              <Icon icon={TrashIcon} className="inline-block w-4 h-4" />
            </Button>
            <label htmlFor={`link-title-${index}`} className="font-semibold">
              Link title
            </label>
            <Input
              id={`link-title-${index}`}
              name={`project_links[${index}].title`}
              type="text"
              placeholder="Type your answer"
              value={link.title}
              onChange={(value) =>
                setRelatedLinks((links) =>
                  links.map((link, i) => (i === index ? { ...link, title: value } : link))
                )
              }
              className="mt-2"
            />
            <label htmlFor={`link-description-${index}`} className="block mt-8 font-semibold">
              Link description
            </label>
            <Input
              id={`link-description-${index}`}
              name={`project_links[${index}].description`}
              type="text"
              placeholder="Type your answer"
              value={link.description}
              onChange={(value) =>
                setRelatedLinks((links) =>
                  links.map((link, i) => (i === index ? { ...link, description: value } : link))
                )
              }
              className="mt-2"
            />
            <label htmlFor={`link-url-${index}`} className="block mt-8 font-semibold">
              Link URL{' '}
              <span aria-hidden className="text-red">
                *
              </span>
            </label>
            <Input
              id={`link-url-${index}`}
              name={`project_links[${index}].url`}
              // The reason we use a type text here and then a pattern is that if we were to use a type
              // url, the validation would require the user to enter the full URL including http(s) at the
              // beginning. This is not what the user is expecting so we're providing a custom validation
              // instead.
              type="text"
              data-type="url"
              // This regex is very simple and permissive. Its goal is to prevent mistakes, not to
              // validate. Proper validation must be implemented in the back-end.
              pattern="^(https?:\/\/)?[^\s]+\.[^\s\.]{2,}$"
              placeholder="Type your answer"
              value={link.url}
              onChange={(value) =>
                setRelatedLinks((links) =>
                  links.map((link, i) => (i === index ? { ...link, url: value } : link))
                )
              }
              className="mt-2"
              required
            />
          </fieldset>
        ))}
        <Tooltip content={<span className="text-xs">Add project link</span>}>
          <Button
            className="pt-2 pb-2 pl-2 pr-2 mx-auto mt-6"
            onClick={() =>
              setRelatedLinks((links) => [...links, { title: '', description: '', url: '' }])
            }
          >
            <span className="sr-only">Add project link</span>
            <Icon icon={PlusIcon} className="inline-block w-4 h-4" />
          </Button>
        </Tooltip>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">Primary objective/purpose</legend>
        <div className="sm:columns-2 sm:gap-11">
          {primaryObjectivePurposeOptions.map((option) => (
            <Checkbox
              key={option.value}
              id={`primary_objective_purpose_${option.value}`}
              value={`${option.value}`}
              defaultChecked={values.primary_objective_purpose?.includes(option.value)}
              name="primary_objective_purpose"
            >
              {option.label}
            </Checkbox>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">Project approach</legend>
        {approachOptions.map((option) => (
          <Checkbox
            key={option.value}
            id={`approach_${option.value}`}
            value={`${option.value}`}
            defaultChecked={values.approach?.includes(option.value)}
            name="approach"
          >
            {option.label}
          </Checkbox>
        ))}
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">
          Has justification for approach?{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </legend>
        <Radio
          id="justification-approach-yes"
          value="true"
          defaultChecked={values.has_justification_for_approach === true}
          name="has_justification_for_approach"
          required
        >
          Yes
        </Radio>
        <Radio
          id="justification-approach-no"
          value="false"
          defaultChecked={values.has_justification_for_approach === false}
          name="has_justification_for_approach"
          required
        >
          No
        </Radio>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">Has public reports?</legend>
        <Radio
          id="public-reports-yes"
          value="true"
          defaultChecked={values.has_public_reports === true}
          name="has_public_reports"
        >
          Yes
        </Radio>
        <Radio
          id="public-reports-no"
          value="false"
          defaultChecked={values.has_public_reports === false}
          name="has_public_reports"
        >
          No
        </Radio>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">
          Has an explicit location?{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </legend>
        <Radio
          id="explicit-location-yes"
          value="true"
          defaultChecked={values.has_explicit_location === true}
          name="has_explicit_location"
          required
        >
          Yes
        </Radio>
        <Radio
          id="explicit-location-no"
          value="false"
          defaultChecked={values.has_explicit_location === false}
          name="has_explicit_location"
          required
        >
          No
        </Radio>
      </fieldset>
      <div className="mt-7">
        <label htmlFor="trees-planted" className="font-semibold">
          Number of trees planted
        </label>
        <Input
          id="trees-planted"
          name="trees_planted_number"
          type="number"
          step={1}
          placeholder="Type your answer"
          defaultValue={values.trees_planted_number}
          className="mt-3"
        />
      </div>
      <div className="mt-7">
        <label htmlFor="project-size" className="font-semibold">
          Size of project in hectares
        </label>
        <Input
          id="project-size"
          name="size_of_project_ha"
          type="number"
          step={1}
          placeholder="Type your answer"
          defaultValue={values.size_of_project_ha}
          className="mt-3"
        />
      </div>
    </>
  );
};

export default ContextStep;
