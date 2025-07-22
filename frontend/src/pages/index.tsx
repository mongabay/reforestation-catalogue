import React, { Fragment } from 'react';

import Image from 'next/image';

import { StaticPageLayoutProps } from 'layouts/static-page';
import { useMediaMatch } from 'rooks';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Categories, PageComponent } from 'types';

import { useProjects } from 'hooks/projects';

import Button from 'components/button';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectCard from 'components/project-card';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomePage: PageComponent<{}, StaticPageLayoutProps> = () => {
  const { isLoading, isError, data } = useProjects([], '', Categories.Context, {
    highlighted: true,
    perPage: 12,
  });

  // 768px corresponds to the Tailwind's sm breakpoint
  const isMdViewport = useMediaMatch('(min-width: 768px)');
  // 1024px corresponds to the Tailwind's sm breakpoint
  const isLgViewport = useMediaMatch('(min-width: 1024px)');

  return (
    <>
      <Head />
      <div className="relative text-white">
        <LayoutContainer className="text-center md:py-40 space-y-[26px]">
          <h1 className="max-w-4xl mx-auto font-serif text-5xl font-bold md:leading-[50px] max-w-[810px]">
            Mongabay&apos;s Global Reforestation Directory
          </h1>
          <p className="max-w-2xl mx-auto mt-10 leading-[26px] md:mt-24">
            To help identify organizations that align with a diversity of motivations and interests,
            researchers from UC Santa Cruz gathered information on 36 criteria that experts say are
            key to success and organized them into categories.
          </p>
        </LayoutContainer>
      </div>
      <LayoutContainer className="py-12 md:py-40">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-28 md:items-center">
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
              Our approach is focused on transparency
            </h2>
            <p className="max-w-3xl mt-6">
              An important caveat is that our project database is based entirely on an
              organization’s self-reporting. We ask: how many of these criteria are publicly
              disclosed by an organization? Currently, no formal third-party certification or
              verification process exists for forest restoration projects. But projects can use this
              tool as a guide for improving their transparency.
            </p>
            <Button to="/explore" className="justify-center mt-10 md:inline-flex md:mt-32 md:px-12">
              Explore the Catalog
            </Button>
          </div>
        </div>
      </LayoutContainer>
      <div className="py-12 md:py-40 bg-primary">
        <LayoutContainer>
          <h2 className="font-serif text-3xl md:text-[40px] text-green-dark md:leading-[56px] max-w-xl font-bold mx-auto text-center">
            Why use the Mongabay Reforestation.app?
          </h2>
          <div className="flex flex-col mt-10 md:flex-row gap-7 md:mt-28">
            <div>
              <div className="text-serif text-4xl">01</div>
              <h3 className="mt-5 md:mt-12 text-xl md:leading-[56px] font-bold font-serif">
                High standards
              </h3>
              <p className="mt-2">
                Our list of criteria was primarily drawn from the Forest Landscape Restoration (FLR)
                approach, widely heralded as the gold standard across the restoration sector.
              </p>
            </div>
            <div>
              <div className="text-serif text-4xl">02</div>
              <h3 className="mt-5 md:mt-12 text-xl md:leading-[56px] font-bold font-serif">
                Transparency
              </h3>
              <p className="mt-2">
                Rather than make an assessment (and perceived endorsement) of the quality of the
                projects, Reforestation.app reveals how much information is publicly disclosed by an
                organization.
              </p>
            </div>
            <div>
              <div className="text-serif text-4xl">03</div>
              <h3 className="mt-5 md:mt-12 text-xl md:leading-[56px] font-bold font-serif">
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
      <LayoutContainer className="py-12 md:py-40">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-28 text-white">
          <h2 className="font-serif text-3xl md:text-[40px] font-bold md:leading-[56px] max-w-lg">
            Learn How to Navigate and Use the Platform
          </h2>
          <div>
            <div className="mt-3">
              <h3 className="font-serif text-xl font-bold md:leading-[56px]">
                Find projects that match your interests
              </h3>
              <p>
                Filter the reforestation catalog using 36 indicators grouped into five categories:
                Context, Ecological, Economic, Institutional and Social.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-xl font-bold md:leading-[56px]">
                Dig into the details of the project chart
              </h3>
              <p>
                The circular diagram represents the completeness of transparency for each project.
                Clicking through provides more details about the project.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-xl font-bold md:leading-[56px]">
                Update project information
              </h3>
              <p>
                Anyone can suggest an update to existing projects by filling in the form linked to
                the <span className="font-semibold">Suggest Page Edits</span> button available on
                every project page. All edits get reviewed and verified before being published.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-xl font-bold md:leading-[56px]">Share new projects</h3>
              <p>
                To share a new project with Mongabay’s editors, please fill in the form accessible
                via the <span className="font-semibold">Submit Project</span> button at the top of
                every page. We’ll review them once a month.
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
    </>
  );
};

export default HomePage;
