import { FC } from 'react';

import Radio from 'components/forms/radio';

import { SocialStepProps } from './types';

export const SocialStep: FC<SocialStepProps> = ({ values }: SocialStepProps) => (
  <>
    <fieldset>
      <legend className="mb-3 font-semibold">
        Has community involvement?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="community-involvement-yes"
        value="true"
        defaultChecked={values.hasCommunityInvolvement === true}
        name="hasCommunityInvolvement"
        required
      >
        Yes
      </Radio>
      <Radio
        id="community-involvement-no"
        value="false"
        defaultChecked={values.hasCommunityInvolvement === false}
        name="hasCommunityInvolvement"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">
        Has gender component?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="gender-component-yes"
        value="true"
        defaultChecked={values.hasGenderComponent === true}
        name="hasGenderComponent"
        required
      >
        Yes
      </Radio>
      <Radio
        id="gender-component-no"
        value="false"
        defaultChecked={values.hasGenderComponent === false}
        name="hasGenderComponent"
        required
      >
        No
      </Radio>
    </fieldset>
    <fieldset className="mt-7">
      <legend className="mb-3 font-semibold">
        News articles associated with project?{' '}
        <span aria-hidden className="text-red">
          *
        </span>
      </legend>
      <Radio
        id="news-articles-yes"
        value="true"
        defaultChecked={values.newsArticlesAssociatedWithProject === true}
        name="newsArticlesAssociatedWithProject"
        required
      >
        Yes
      </Radio>
      <Radio
        id="news-articles-no"
        value="false"
        defaultChecked={values.newsArticlesAssociatedWithProject === false}
        name="newsArticlesAssociatedWithProject"
        required
      >
        No
      </Radio>
    </fieldset>
  </>
);

export default SocialStep;
