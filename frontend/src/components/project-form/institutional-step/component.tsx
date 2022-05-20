import { FC } from 'react';

import Input from 'components/forms/input';
import Radio from 'components/forms/radio';
import { OrganizationType } from 'types';

import { InstitutionalStepProps } from './types';

export const InstitutionalStep: FC<InstitutionalStepProps> = ({
  values,
}: InstitutionalStepProps) => (
  <>
    <fieldset>
      <legend className="mb-3 font-semibold">Organization type</legend>
      {Object.values(OrganizationType).map((organizationType) => (
        <Radio
          key={organizationType}
          id={organizationType}
          value={organizationType}
          defaultChecked={values.organizationType?.includes(organizationType)}
          name="organizationType"
        >{`${organizationType.substring(0, 1).toUpperCase()}${organizationType.substring(
          1
        )}`}</Radio>
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
        defaultChecked={values.hasProjectPartners === true}
        name="hasProjectPartners"
        required
      >
        Yes
      </Radio>
      <Radio
        id="project-partners-no"
        value="false"
        defaultChecked={values.hasProjectPartners === false}
        name="hasProjectPartners"
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
        name="partnerName"
        type="text"
        placeholder="Type your answer"
        defaultValue={values.partnerName}
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
        defaultChecked={values.scientificResearchAssociatedWithProject === true}
        name="scientificResearchAssociatedWithProject"
        required
      >
        Yes
      </Radio>
      <Radio
        id="scientific-research-no"
        value="false"
        defaultChecked={values.scientificResearchAssociatedWithProject === false}
        name="scientificResearchAssociatedWithProject"
        required
      >
        No
      </Radio>
    </fieldset>
  </>
);

export default InstitutionalStep;
