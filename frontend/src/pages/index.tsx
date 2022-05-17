import React from 'react';

import Image from 'next/image';

import Button from 'components/button';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { PageComponent } from 'types';

export const HomePage: PageComponent<{}, StaticPageLayoutProps> = () => (
  <>
    <Head />
    <div className="relative bg-[#04261F]/70 bg-blend-normal">
      <div className="absolute inset-0 object-cover -z-10">
        <Image alt="" src="/images/home-bg.png" layout="fill" objectFit="cover" />
      </div>
      <LayoutContainer className="py-12 text-center text-white md:py-40">
        <h1 className="max-w-4xl mx-auto font-serif text-3xl md:text-[40px] font-bold md:leading-[50px]">
          Mongabay’s global directory of reforestation and tree-planting projects is a starting
          point for people wanting to fund reforestation.
        </h1>
        <p className="max-w-2xl mx-auto mt-10 leading-6 md:mt-24">
          To help identify projects that align with a diversity of motivations and interests,
          Mongabay used 36 criteria that experts say are key to success and organized them into the
          categories: context, ecological, economic, social, and institutional.
        </p>
        <div className="flex flex-col gap-4 mt-10 md:inline-flex md:mt-24 md:flex-row">
          <Button theme="secondary-white" to="/about" className="justify-center md:px-12">
            Learn more
          </Button>
          <Button theme="primary-white" to="/explore" className="justify-center md:px-12">
            Explore catalog
          </Button>
        </div>
      </LayoutContainer>
    </div>
    <LayoutContainer className="py-12 md:py-40">
      <div className="flex flex-col gap-10 md:flex-row md:gap-28 md:items-center">
        <div className="shrink-0">
          <Image
            src="/images/home-approach.png"
            width={433}
            height={361}
            alt="People planting a small tree"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-[40px] text-grey-dark md:leading-[56px] max-w-lg">
            Our approach is focused on transparency.
          </h2>
          <p className="max-w-3xl mt-6">
            An important caveat is that our database is based entirely on an organization’s
            self-reporting. Currently, no formal third-party certification or verification process
            exists for restoration projects.
          </p>
          <Button to="/explore" className="justify-center mt-10 md:inline-flex md:mt-32 md:px-12">
            Explore catalog
          </Button>
        </div>
      </div>
    </LayoutContainer>
    <div className="py-12 md:py-40 bg-grey-light">
      <LayoutContainer>
        <h2 className="font-serif text-3xl md:text-[40px] text-green md:leading-[56px] max-w-xl font-bold mx-auto text-center">
          Why use Mongabay Reforestation App?
        </h2>
        <div className="flex flex-col mt-10 md:flex-row gap-7 md:mt-28">
          <div>
            <div className="flex items-center justify-center w-40 h-40 mx-auto rounded-full bg-green">
              <Image src="/icons/analysis.svg" width={67} height={68} alt="" />
            </div>
            <h3 className="mt-5 md:mt-12 text-xl text-center md:leading-[56px] font-bold text-green font-serif">
              Data analysis
            </h3>
            <p className="mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim amet, mauris faucibus
              cras morbi molestie.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-40 h-40 mx-auto rounded-full bg-green">
              <Image src="/icons/transparency.svg" width={62} height={62} alt="" />
            </div>
            <h3 className="mt-5 md:mt-12 text-xl text-center md:leading-[56px] font-bold text-green font-serif">
              Transparency
            </h3>
            <p className="mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim amet, mauris faucibus
              cras morbi molestie.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-40 h-40 mx-auto rounded-full bg-green">
              <Image src="/icons/database.svg" width={56} height={63} alt="" />
            </div>
            <h3 className="mt-5 md:mt-12 text-xl text-center md:leading-[56px] font-bold text-green font-serif">
              Large database
            </h3>
            <p className="mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim amet, mauris faucibus
              cras morbi molestie.
            </p>
          </div>
        </div>
      </LayoutContainer>
    </div>
    <LayoutContainer className="py-12 md:py-40">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-28 md:items-center">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-[40px] text-green font-bold md:leading-[56px] max-w-lg">
            How it works?
          </h2>
          <div className="mt-3">
            <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
              Filter the data
            </h3>
            <p>
              Filter the reforestation catalogue using 36 indicators grouped into 5 categories:
              Context, Ecological, Economic, Institutional and Social.
            </p>
          </div>
          <div className="mt-7 md:mt-8">
            <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
              Interact with the diagrams
            </h3>
            <p>
              Every project in the database is represented with a circular diagram made of five
              lines, each corresponding to a category: context, ecological, economic, social, and
              institutional.
            </p>
          </div>
          <div className="mt-7 md:mt-8">
            <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
              Update project information
            </h3>
            <p>
              Updating existing projects can be done by filling in the form linked to the{' '}
              <span className="font-semibold">Suggest Page Edits</span> button available on every
              project page.
            </p>
          </div>
          <div className="mt-7 md:mt-8">
            <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
              Share new projects
            </h3>
            <p>
              To share a new project, please fill in the form accessible via the{' '}
              <span className="font-semibold">Submit Project Information</span> button at the top of
              every page.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Image
            src="/images/home-how-it-works-1.png"
            width={525}
            height={367}
            alt="Explore page"
          />
          <Image
            src="/images/home-how-it-works-2.png"
            width={525}
            height={367}
            alt="Project page"
          />
        </div>
      </div>
    </LayoutContainer>
    <div className="py-12 text-white md:py-40 bg-green">
      <LayoutContainer>
        <h2 className="font-serif text-3xl md:text-[40px] md:leading-[56px] max-w-xl font-bold mx-auto text-center">
          Highlighted projects
        </h2>
      </LayoutContainer>
    </div>
    <LayoutContainer className="py-12 md:py-40">
      <h2 className="font-serif text-3xl md:text-[40px] text-green md:leading-[56px] font-bold">
        Partners:
      </h2>
      <div className="flex flex-col items-center gap-8 mt-5 md:mt-14 md:flex-row md:gap-10">
        <div className="flex-shrink-0">
          <Image src="/images/mongabay-horizontal.png" alt="Mongabay" width={333} height={50} />
        </div>
        <div className="flex-shrink-0">
          <Image src="/images/vizzuality.png" alt="Vizzuality" width={245} height={63} />
        </div>
      </div>
    </LayoutContainer>
    <div className="py-12 md:py-40 bg-green/10">
      <LayoutContainer>
        <p className="font-serif text-3xl md:text-[40px] md:leading-tight max-w-3xl text-green font-bold">
          Start exploring and get involved in Mongabay’s global directory of reforestation and
          tree-planting project.
        </p>
        <Button to="/explore" className="justify-center mt-10 md:inline-flex md:mt-32 md:px-12">
          Explore catalog
        </Button>
      </LayoutContainer>
    </div>
  </>
);

export default HomePage;
