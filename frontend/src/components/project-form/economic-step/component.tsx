import { FC } from 'react';

import Checkbox from 'components/forms/checkbox';
import Input from 'components/forms/input';
import Radio from 'components/forms/radio';
import { FinancialModelType, FollowUpType } from 'types';

import { EconomicStepProps } from './types';

export const EconomicStep: FC<EconomicStepProps> = ({ values }: EconomicStepProps) => (
  <>
    <div>
      <label htmlFor="donors" className="font-semibold">
        Donors
      </label>
      <Input
        id="donors"
        name="nameOrgDonor"
        type="text"
        placeholder="Type your answer"
        defaultValue={values.nameOrgDonor}
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
        defaultChecked={values.followUpDisclosed === true}
        name="followUpDisclosed"
        required
      >
        Yes
      </Radio>
      <Radio
        id="follow-up-no"
        value="false"
        defaultChecked={values.followUpDisclosed === false}
        name="followUpDisclosed"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">Type of follow-up</legend>
      {Object.values(FollowUpType).map((followUpType) => (
        <Checkbox
          key={followUpType}
          id={followUpType}
          value={followUpType}
          defaultChecked={values.typeOfFollowUp?.includes(followUpType)}
          name="typeOfFollowUp"
        >{`${followUpType.substring(0, 1).toUpperCase()}${followUpType.substring(1)}`}</Checkbox>
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
        defaultChecked={values.identifyDeforestationDriver === true}
        name="identifyDeforestationDriver"
        required
      >
        Yes
      </Radio>
      <Radio
        id="deforestation-driver-no"
        value="false"
        defaultChecked={values.identifyDeforestationDriver === false}
        name="identifyDeforestationDriver"
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
        defaultChecked={values.localSeedlingNurseries === true}
        name="localSeedlingNurseries"
        required
      >
        Yes
      </Radio>
      <Radio
        id="local-seedling-nurseries-no"
        value="false"
        defaultChecked={values.localSeedlingNurseries === false}
        name="localSeedlingNurseries"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">Financial model</legend>
      {Object.values(FinancialModelType).map((financialModel) => (
        <Checkbox
          key={financialModel}
          id={financialModel}
          value={financialModel}
          defaultChecked={values.financialModel?.includes(financialModel)}
          name="financialModel"
        >{`${financialModel.substring(0, 1).toUpperCase()}${financialModel.substring(
          1
        )}`}</Checkbox>
      ))}
    </fieldset>
  </>
);

export default EconomicStep;
