import cx from 'classnames';

import Button from 'components/button';
import LayoutContainer from 'components/layout-container';
import NewsletterSignup from 'components/newsletter-signup';

import Arrow from 'svgs/arrow.svg';

export default function StayUpdatedSection({
  className,
  showNewsletterSignup,
  setShowNewsletterSignup,
}: {
  className?: string;
  showNewsletterSignup: boolean;
  setShowNewsletterSignup: (value: boolean) => void;
}) {
  return (
    <div
      className={cx(
        'py-12 text-white md:py-14 bg-green-emerald/40 text-center max-w-[1120px] mx-auto rounded-2xl',
        className
      )}
    >
      <LayoutContainer className="space-y-4">
        <h3 className="text-6xl font-serif">Stay updated</h3>
        <p className="font-serif md:leading-tight max-w-[455px] mx-auto">
          Subscribe to our newsletter to find out about reforestation projects, original stories,
          activism awareness and more.
        </p>
        <Button
          theme="secondary-green"
          onClick={() => setShowNewsletterSignup(true)}
          className="justify-center !mt-8 inline-flex text-lg"
        >
          Subscribe to newsletter
          <Arrow className="w-4 h-4 ml-2 fill-green-dark" />
        </Button>
        <NewsletterSignup
          open={showNewsletterSignup}
          onDismiss={() => setShowNewsletterSignup(false)}
        />
      </LayoutContainer>
    </div>
  );
}
