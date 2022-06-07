import { FC } from 'react';

import { useEnumOptions } from 'hooks/enums';

import Checkbox from 'components/forms/checkbox';
import Input from 'components/forms/input';
import Radio from 'components/forms/radio';

import { EconomicStepProps } from './types';

export const EconomicStep: FC<EconomicStepProps> = ({ values }: EconomicStepProps) => {
  const { data: typeOfFollowUpOptions } = useEnumOptions('type_of_follow_up');
  const { data: financialModalOptions } = useEnumOptions('financial_model');

  return (
    <>
      <div>
        <label htmlFor="donors" className="font-semibold">
          Donors
        </label>
        <Input
          id="donors"
          name="name_org_donor"
          type="text"
          placeholder="Type your answer"
          defaultValue={values.name_org_donor}
          className="mt-3"
        />
      </div>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">
          Follow up disclosed?{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </legend>
        <Radio
          id="follow-up-yes"
          value="true"
          defaultChecked={values.follow_up_disclosed === true}
          name="follow_up_disclosed"
          required
        >
          Yes
        </Radio>
        <Radio
          id="follow-up-no"
          value="false"
          defaultChecked={values.follow_up_disclosed === false}
          name="follow_up_disclosed"
          required
        >
          No
        </Radio>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">Type of follow-up</legend>
        {typeOfFollowUpOptions.map((option) => (
          <Checkbox
            key={option.value}
            id={`type_of_follow_up_${option.value}`}
            value={`${option.value}`}
            defaultChecked={values.type_of_follow_up?.includes(option.value)}
            name="type_of_follow_up"
          >
            {option.label}
          </Checkbox>
        ))}
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">
          Identify deforestation driver{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </legend>
        <Radio
          id="deforestation-driver-yes"
          value="true"
          defaultChecked={values.identify_deforestation_driver === true}
          name="identify_deforestation_driver"
          required
        >
          Yes
        </Radio>
        <Radio
          id="deforestation-driver-no"
          value="false"
          defaultChecked={values.identify_deforestation_driver === false}
          name="identify_deforestation_driver"
          required
        >
          No
        </Radio>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">
          Involves local seedling nurseries?{' '}
          <span aria-hidden className="text-red">
            *
          </span>
        </legend>
        <Radio
          id="local-seedling-nurseries-yes"
          value="true"
          defaultChecked={values.local_seedling_nurseries === true}
          name="local_seedling_nurseries"
          required
        >
          Yes
        </Radio>
        <Radio
          id="local-seedling-nurseries-no"
          value="false"
          defaultChecked={values.local_seedling_nurseries === false}
          name="local_seedling_nurseries"
          required
        >
          No
        </Radio>
      </fieldset>
      <fieldset className="mt-7">
        <legend className="mb-3 font-semibold">Financial model</legend>
        {financialModalOptions.map((option) => (
          <Checkbox
            key={option.value}
            id={`financial_model_${option.value}`}
            value={`${option.value}`}
            defaultChecked={values.financial_model?.includes(option.value)}
            name="financial_model"
          >
            {option.label}
          </Checkbox>
        ))}
      </fieldset>
    </>
  );
};

export default EconomicStep;
