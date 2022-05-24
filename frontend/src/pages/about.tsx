import React from 'react';

import Image from 'next/image';

import { GetServerSideProps } from 'next';

import { fetchAboutPageContent } from 'hooks/cms';

import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { PageComponent } from 'types';

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await fetchAboutPageContent();

  return {
    props: {
      content,
    },
  };
};

export const AboutPage: PageComponent<{ content: string }, StaticPageLayoutProps> = ({
  content,
}) => {
  return (
    <LayoutContainer className="py-12 md:py-20">
      <Head title="About" />
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center flex-shrink-0 md:block">
          <Image src="/images/about-chart.png" width={183} height={203} alt="" />
        </div>
        <div className="flex-grow mt-5 md:mt-12 md:ml-16">
          <h1 className="font-serif text-3xl md:text-[40px] max-w-lg md:leading-[56px] font-bold">
            Mongabay Reforestation Directory
          </h1>
          <div className="cms-content" dangerouslySetInnerHTML={{ __html: content }} />
          <div className="mt-12 md:mt-20">
            <h2 className="font-serif text-3xl">Project partners</h2>
            <div className="flex flex-col items-center gap-8 mt-8 md:mt-14 md:flex-row md:gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/images/mongabay-horizontal.png"
                  alt="Mongabay"
                  width={333}
                  height={50}
                />
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/vizzuality.png" alt="Vizzuality" width={245} height={63} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default AboutPage;
