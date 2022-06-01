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
        defaultChecked={values.has_community_involvement === true}
        name="has_community_involvement"
        required
      >
        Yes
      </Radio>
      <Radio
        id="community-involvement-no"
        value="false"
        defaultChecked={values.has_community_involvement === false}
        name="has_community_involvement"
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
        defaultChecked={values.has_gender_component === true}
        name="has_gender_component"
        required
      >
        Yes
      </Radio>
      <Radio
        id="gender-component-no"
        value="false"
        defaultChecked={values.has_gender_component === false}
        name="has_gender_component"
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
        defaultChecked={values.news_articles_associated_with_project === true}
        name="news_articles_associated_with_project"
        required
      >
        Yes
      </Radio>
      <Radio
        id="news-articles-no"
        value="false"
        defaultChecked={values.news_articles_associated_with_project === false}
        name="news_articles_associated_with_project"
        required
      >
        No
      </Radio>
    </fieldset>
  </>
);

export default SocialStep;
