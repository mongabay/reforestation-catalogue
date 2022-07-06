import { FC } from 'react';

import Input from 'components/forms/input';
import Textarea from 'components/forms/textarea';

import { InformationStepProps } from './types';

export const InformationStep: FC<InformationStepProps> = ({ values }: InformationStepProps) => (
  <>
    <div>
      <label htmlFor="name" className="font-semibold">
        Your name{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </label>
      <Input
        id="name"
        name="project_contacts_attributes[0].name"
        type="text"
        placeholder="Type your answer"
        defaultValue={values.project_contacts_attributes?.[0]?.name}
        className="mt-3"
        required
      />
    </div>
    <div className="mt-7">
      <label htmlFor="email" className="font-semibold">
        Your email
      </label>
      <Input
        id="email"
        name="project_contacts_attributes[0].email"
        type="email"
        placeholder="Type your answer"
        defaultValue={values.project_contacts_attributes?.[0]?.email}
        className="mt-3"
      />
    </div>
    <div className="mt-7">
      <label htmlFor="background-info" className="font-semibold">
        Background information about you
      </label>
      <Textarea
        id="background-info"
        name="project_contacts_attributes[0].company"
        placeholder="Type your answer"
        defaultValue={values.project_contacts_attributes?.[0]?.company}
        rows={4}
        className="mt-3"
      />
    </div>
  </>
);

export default InformationStep;
