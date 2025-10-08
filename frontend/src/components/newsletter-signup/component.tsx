import { FC, useEffect } from 'react';

import { usePrevious } from 'rooks';

import { COLOR_THEMES, COMMON_CLASSES } from 'components/button/constants';
import Checkbox from 'components/forms/checkbox';
import Input from 'components/forms/input';
import Modal from 'components/modal';
import { logEvent } from 'utils/analytics';

import { NewsletterSignupProps } from './types';

export const NewsletterSignup: FC<NewsletterSignupProps> = ({ open, onDismiss }) => {
  const previousOpen = usePrevious(open);

  useEffect(() => {
    if (!previousOpen && open) {
      logEvent('Open subscribe modal');
    }
  }, [open, previousOpen]);

  return (
    <Modal title="Subscribe" open={open} onDismiss={onDismiss}>
      <div className="md:px-20">
        <h1 className="flex-shrink-0 font-serif text-3xl font-bold text-orange">Subscribe</h1>
        <form
          action="https://Mongabay.us14.list-manage.com/subscribe/post?u=80161fe385606408293ae0e51&amp;id=940652e1f4"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          onSubmit={() => logEvent('Submit subscribe form')}
        >
          <div className="mt-6 sm:mt-12">
            <label htmlFor="mce-EMAIL" className="font-semibold">
              Email address{' '}
              <span aria-hidden className="text-red">
                *
              </span>
            </label>
            <Input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              className="mt-3"
              placeholder="Type your answer"
            />
          </div>
          <div className="mt-7">
            <label htmlFor="mce-FNAME" className="font-semibold">
              First name
            </label>
            <Input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              className="mt-3"
              placeholder="Type your answer"
            />
          </div>
          <div className="mt-7">
            <label htmlFor="mce-LNAME" className="font-semibold">
              Last name
            </label>
            <Input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              className="mt-3"
              placeholder="Type your answer"
            />
          </div>
          <div className="mt-7">
            <label htmlFor="mce-MMERGE3" className="font-semibold">
              Company / Organization / Institution
            </label>
            <Input
              type="text"
              name="MMERGE3"
              id="mce-MMERGE3"
              className="mt-3"
              placeholder="Type your answer"
            />
          </div>
          <div className="mt-7">
            <label htmlFor="mce-MMERGE4" className="font-semibold">
              Country
            </label>
            <Input
              type="text"
              name="MMERGE4"
              id="mce-MMERGE4"
              className="mt-3"
              placeholder="Type your answer"
            />
          </div>
          <fieldset className="mt-7">
            <legend className="mb-3 font-semibold">Type of newsletter</legend>
            <div className="2xl:flex 2xl:flex-wrap 2xl:gap-9 2xl:items-center">
              <Checkbox id="mce-group[3382]-3382-0" name="group[3382][2097152]" value="2097152">
                Visual newsletter
              </Checkbox>
              <Checkbox id="mce-group[3382]-3382-1" name="group[3382][8388608]" value="8388608">
                Reforestation newsletter
              </Checkbox>
            </div>
          </fieldset>
          <fieldset className="mt-7">
            <legend className="mb-3 font-semibold">Marketing permissions</legend>
            <p className="text-sm">
              Mongabay.com will use the information you provide on this form to be in touch with you
              and to provide updates and marketing. Please let us know all the ways you would like
              to hear from us:
            </p>
            <div className="mt-5 2xl:flex 2xl:flex-wrap 2xl:gap-9 2xl:items-center">
              <Checkbox id="gdpr_1" name="gdpr[1]" value="Y">
                Email
              </Checkbox>
              <Checkbox id="gdpr_5" name="gdpr[5]" value="Y">
                Direct Mail
              </Checkbox>
              <Checkbox id="gdpr_9" name="gdpr[9]" value="Y">
                Customized online advertising
              </Checkbox>
            </div>
            <p className="mt-10 text-xs">
              You can change your mind at any time by clicking the unsubscribe link in the footer of
              any email you receive from us, or by contacting us at{' '}
              <a href="mailto:contact@mongabay.com" className="font-semibold underline">
                contact@mongabay.com
              </a>
              . We will treat your information with respect. For more information about our privacy
              practices please visit our website. By clicking below, you agree that we may process
              your information in accordance with these terms.
            </p>
          </fieldset>
          <p className="mt-4 text-xs">
            We use Mailchimp as our marketing platform. By clicking below to subscribe, you
            acknowledge that your information will be transferred to Mailchimp for processing.{' '}
            <a
              href="https://mailchimp.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Learn more about {"Mailchimp's"} privacy practices here.
            </a>
          </p>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_80161fe385606408293ae0e51_940652e1f4"
              tabIndex={-1}
              value=""
            />
          </div>
          <div className="pb-2 mt-10">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className={`${COMMON_CLASSES} ${COLOR_THEMES['primary-orange']}`}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default NewsletterSignup;
