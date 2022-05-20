import { FC } from 'react';

import Checkbox from 'components/forms/checkbox';
import Radio from 'components/forms/radio';
import { ForestType } from 'types';

import { EcologicalStepProps } from './types';

export const EcologicalStep: FC<EcologicalStepProps> = ({ values }: EcologicalStepProps) => (
  <>
    <fieldset>
      <legend className="mb-3 font-semibold">
        Addresses known threats?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="known-threats-yes"
        value="true"
        defaultChecked={values.addressesKnownThreats === true}
        name="addressesKnownThreats"
        required
      >
        Yes
      </Radio>
      <Radio
        id="known-threats-no"
        value="false"
        defaultChecked={values.addressesKnownThreats === false}
        name="addressesKnownThreats"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">
        Discloses species used?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="used-species-yes"
        value="true"
        defaultChecked={values.disclosesSpeciesUsed === true}
        name="disclosesSpeciesUsed"
        required
      >
        Yes
      </Radio>
      <Radio
        id="used-species-no"
        value="false"
        defaultChecked={values.disclosesSpeciesUsed === false}
        name="disclosesSpeciesUsed"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">
        Use native species?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="native-species-yes"
        value="true"
        defaultChecked={values.useNativeSpecies === true}
        name="useNativeSpecies"
        required
      >
        Yes
      </Radio>
      <Radio
        id="native-species-no"
        value="false"
        defaultChecked={values.useNativeSpecies === false}
        name="useNativeSpecies"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">
        Use exotic species?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="exotic-species-yes"
        value="true"
        defaultChecked={values.useExoticSpecies === true}
        name="useExoticSpecies"
        required
      >
        Yes
      </Radio>
      <Radio
        id="exotic-species-no"
        value="false"
        defaultChecked={values.useExoticSpecies === false}
        name="useExoticSpecies"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">
        Fire prevention?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="fire-prevention-yes"
        value="true"
        defaultChecked={values.firePrevention === true}
        name="firePrevention"
        required
      >
        Yes
      </Radio>
      <Radio
        id="fire-prevention-no"
        value="false"
        defaultChecked={values.firePrevention === false}
        name="firePrevention"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">
        Forest Type / Ecozone{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      {Object.values(ForestType).map((forestType) => (
        <Checkbox
          key={forestType}
          id={forestType}
          value={forestType}
          defaultChecked={values.forestType?.includes(forestType)}
          name="forestType"
        >{`${forestType.substring(0, 1).toUpperCase()}${forestType.substring(1)}`}</Checkbox>
      ))}
    </fieldset>
  </>
);

export default EcologicalStep;
