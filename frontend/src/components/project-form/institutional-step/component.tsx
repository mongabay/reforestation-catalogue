import { FC } from 'react';

import { useEnumOptions } from 'hooks/enums';

import Input from 'components/forms/input';
import Radio from 'components/forms/radio';

import { InstitutionalStepProps } from './types';

export const InstitutionalStep: FC<InstitutionalStepProps> = ({
  values,
}: InstitutionalStepProps) => {
  const { data: organizationTypeOptions } = useEnumOptions('organization_type');

  return (
    <>
      <fieldset>
        <legend className="mb-3 font-semibold">Organization type</legend>
        {organizationTypeOptions.map((option) => (
          <Radio
            key={option.value}
            id={`organization_type_${option.value}`}
            value={`${option.value}`}
            defaultChecked={values.organization_type === option.value}
            name="organization_type"
          >
            {option.label}
          </Radio>
        ))}
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">
          Has project partners?{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </legend>
        <Radio
          id="project-partners-yes"
          value="true"
          defaultChecked={values.has_project_partners === true}
          name="has_project_partners"
          required
        >
          Yes
        </Radio>
        <Radio
          id="project-partners-no"
          value="false"
          defaultChecked={values.has_project_partners === false}
          name="has_project_partners"
          required
        >
          No
        </Radio>
      </fieldset>
      <div className="mt-7">
        <label htmlFor="partner-name" className="font-semibold">
          Partner name(s)
        </label>
        <Input
          id="partner-name"
          name="partner_name"
          type="text"
          placeholder="Type your answer"
          defaultValue={values.partner_name}
          className="mt-3"
        />
      </div>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">
          Scientific research associated with the project?{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </legend>
        <Radio
          id="scientific-research-yes"
          value="true"
          defaultChecked={values.scientific_research_associated_with_project === true}
          name="scientific_research_associated_with_project"
          required
        >
          Yes
        </Radio>
        <Radio
          id="scientific-research-no"
          value="false"
          defaultChecked={values.scientific_research_associated_with_project === false}
          name="scientific_research_associated_with_project"
          required
        >
          No
        </Radio>
      </fieldset>
    </>
  );
};

export default InstitutionalStep;
