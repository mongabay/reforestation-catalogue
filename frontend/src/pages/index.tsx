import React, { Fragment, useState } from 'react';

import Image from 'next/image';

import { useMediaMatch } from 'rooks';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Categories } from 'types';

import { useProjects } from 'hooks/projects';

import Button from 'components/button';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectCard from 'components/project-card';
import StayUpdatedSection from 'components/stay-updated-section';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomePage: React.FC = () => {
  const { isLoading, isError, data } = useProjects([], '', Categories.Context, {
    highlighted: true,
    perPage: 12,
  });
  const [showNewsletterSignup, setShowNewsletterSignup] = useState(false);

  // 768px corresponds to the Tailwind's sm breakpoint
  const isMdViewport = useMediaMatch('(min-width: 768px)');
  // 1024px corresponds to the Tailwind's sm breakpoint
  const isLgViewport = useMediaMatch('(min-width: 1024px)');

  return (
    <>
      <Head />
      <div className="relative text-white">
        <LayoutContainer className="text-center py-40 space-y-[26px]">
          <h1 className="max-w-4xl mx-auto font-serif text-7xl max-w-[810px]">
            Mongabay&apos;s Global Reforestation Directory
          </h1>
          <p className="max-w-2xl mx-auto mt-10 leading-[26px] md:mt-24 font-sans">
            To help identify organizations that align with a diversity of motivations and interests,
            researchers from UC Santa Cruz gathered information on 36 criteria that experts say are
            key to success and organized them into categories.
          </p>
        </LayoutContainer>
      </div>
      <div className="py-12 md:py-20 bg-primary max-w-[1120px] mx-auto rounded-2xl">
        <LayoutContainer className="lg:px-20">
          <div className="flex flex-wrap justify-between gap-10 md:gap-20">
            <h2 className="font-serif text-3xl md:text-[40px] text-green-dark md:leading-[56px] max-w-xl">
              Why use the Mongabay Reforestation.app?
            </h2>
            <Button to="/explore" className="md:max-h-11 min-w-fit">
              Explore the Catalog
            </Button>
          </div>
          <div className="flex flex-col mt-10 md:flex-row gap-7 md:mt-14">
            <div>
              <div className="text-serif text-4xl">01</div>
              <h3 className="mt-5 md:mt-10 text-2xl md:leading-[56px] font-serif">
                High standards
              </h3>
              <p className="mt-2">
                Our list of criteria was primarily drawn from the Forest Landscape Restoration (FLR)
                approach, widely heralded as the gold standard across the restoration sector.
              </p>
            </div>
            <div>
              <div className="text-serif text-4xl">02</div>
              <h3 className="mt-5 md:mt-10 text-2xl md:leading-[56px] font-serif">Transparency</h3>
              <p className="mt-2">
                Rather than make an assessment (and perceived endorsement) of the quality of the
                projects, Reforestation.app reveals how much information is publicly disclosed by an
                organization.
              </p>
            </div>
            <div>
              <div className="text-serif text-4xl">03</div>
              <h3 className="mt-5 md:mt-10 text-2xl md:leading-[56px] font-serif">
                A growing catalog
              </h3>
              <p className="mt-2">
                The community is encouraged to share new projects and update information about
                existing projects to make this catalog the best available resource.
              </p>
            </div>
          </div>
        </LayoutContainer>
      </div>
      <LayoutContainer className="py-12 md:py-20 xl:!px-0 max-w-[1120px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-28 text-white">
          <h2 className="font-serif text-3xl md:text-[40px] md:leading-[56px] max-w-lg">
            Learn How to Navigate and Use the Platform
          </h2>
          <div className="max-w-[480px]">
            <div>
              <h3 className="font-serif text-[20px] md:leading-[46px]">
                Find projects that match your interests
              </h3>
              <p className="text-sm leading-6 font-sans">
                Filter the reforestation catalog using 36 indicators grouped into five categories:
                Context, Ecological, Economic, Institutional and Social.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-[20px] md:leading-[46px]">
                Dig into the details of the project chart
              </h3>
              <p className="text-sm leading-6 font-sans">
                The circular diagram represents the completeness of transparency for each project.
                Clicking through provides more details about the project.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-[20px] md:leading-[46px]">
                Update project information
              </h3>
              <p className="text-sm leading-6 font-sans">
                Anyone can suggest an update to existing projects by filling in the form linked to
                the <span className="font-semibold">Suggest Page Edits</span> button available on
                every project page. All edits get reviewed and verified before being published.
              </p>
            </div>
          </div>
        </div>
      </LayoutContainer>
      {!isLoading && !isError && data.pages?.[0].data.length > 0 && (
        <div className="py-12 md:py-40 bg-green">
          <LayoutContainer>
            <h2 className="font-serif text-white text-3xl md:text-[40px] md:leading-[56px] max-w-xl font-bold mx-auto text-center">
              Highlighted projects
            </h2>
            <Swiper
              className="max-w-5xl !pb-16 mx-auto mt-5 md:mt-14"
              slidesPerView={isMdViewport ? 3 : 1}
              centeredSlides={true}
              loop
              effect="coverflow"
              coverflowEffect={{
                scale: 0.8,
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={isLgViewport}
              pagination
              modules={[EffectCoverflow, Navigation, Pagination]}
            >
              {data.pages.map((page) => (
                <Fragment key={page.meta.current_page}>
                  {page.data.map((project) => (
                    <SwiperSlide key={project.id}>
                      <ProjectCard key={project.id} project={project} tooltip={false} />
                    </SwiperSlide>
                  ))}
                </Fragment>
              ))}
            </Swiper>
          </LayoutContainer>
        </div>
      )}
      <StayUpdatedSection
        showNewsletterSignup={showNewsletterSignup}
        setShowNewsletterSignup={setShowNewsletterSignup}
      />
      <LayoutContainer className="py-10 md:py-20">
        <h2 className="text-sm text-white md:leading-[56px] text-center uppercase font-sans">
          Partners
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 mt-5 md:mt-6 md:flex-row md:gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/images/mongabay-horizontal-white.png"
              alt="Mongabay"
              width={176}
              height={25}
            />
          </div>
          <div className="flex-shrink-0">
            <Image src="/images/vizzuality.svg" alt="Vizzuality logo" width={117} height={24} />
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export default HomePage;
