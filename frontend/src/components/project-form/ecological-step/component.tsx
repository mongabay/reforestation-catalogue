import { FC } from 'react';

import { useEnumOptions } from 'hooks/enums';

import Checkbox from 'components/forms/checkbox';
import Radio from 'components/forms/radio';

import { EcologicalStepProps } from './types';

export const EcologicalStep: FC<EcologicalStepProps> = ({ values }: EcologicalStepProps) => {
  const { data: forestTypeOptions } = useEnumOptions('forest_type');

  return (
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
          defaultChecked={values.addresses_known_threats === true}
          name="addresses_known_threats"
          required
        >
          Yes
        </Radio>
        <Radio
          id="known-threats-no"
          value="false"
          defaultChecked={values.addresses_known_threats === false}
          name="addresses_known_threats"
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
          defaultChecked={values.discloses_species_used === true}
          name="discloses_species_used"
          required
        >
          Yes
        </Radio>
        <Radio
          id="used-species-no"
          value="false"
          defaultChecked={values.discloses_species_used === false}
          name="discloses_species_used"
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
          defaultChecked={values.use_native_species === true}
          name="use_native_species"
          required
        >
          Yes
        </Radio>
        <Radio
          id="native-species-no"
          value="false"
          defaultChecked={values.use_native_species === false}
          name="use_native_species"
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
          defaultChecked={values.use_exotic_species === true}
          name="use_exotic_species"
          required
        >
          Yes
        </Radio>
        <Radio
          id="exotic-species-no"
          value="false"
          defaultChecked={values.use_exotic_species === false}
          name="use_exotic_species"
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
          defaultChecked={values.fire_prevention === true}
          name="fire_prevention"
          required
        >
          Yes
        </Radio>
        <Radio
          id="fire-prevention-no"
          value="false"
          defaultChecked={values.fire_prevention === false}
          name="fire_prevention"
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
        {forestTypeOptions.map((option) => (
          <Checkbox
            key={option.value}
            id={`forest_type_${option.value}`}
            value={`${option.value}`}
            defaultChecked={values.forest_type?.includes(option.value)}
            name="forest_type"
          >
            {option.label}
          </Checkbox>
        ))}
      </fieldset>
    </>
  );
};

export default EcologicalStep;
