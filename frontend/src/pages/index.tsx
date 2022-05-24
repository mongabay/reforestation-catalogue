import React from 'react';

import Image from 'next/image';

import { useMediaMatch } from 'rooks';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useProjects } from 'hooks/projects';

import Button from 'components/button';
import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import ProjectCard from 'components/project-card';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { Categories, PageComponent } from 'types';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomePage: PageComponent<{}, StaticPageLayoutProps> = () => {
  // TODO: only fetch the highlighted projects
  const { isLoading, isError, data } = useProjects([], '', Categories.Context);

  // 768px corresponds to the Tailwind's sm breakpoint
  const isMdViewport = useMediaMatch('(min-width: 768px)');
  // 1024px corresponds to the Tailwind's sm breakpoint
  const isLgViewport = useMediaMatch('(min-width: 1024px)');

  return (
    <>
      <Head />
      <div className="relative bg-[#04261F]/70 bg-blend-normal">
        <div className="absolute inset-0 object-cover -z-10">
          <Image alt="" src="/images/home-bg.png" layout="fill" objectFit="cover" />
        </div>
        <LayoutContainer className="py-12 text-center text-white md:py-40">
          <h1 className="max-w-4xl mx-auto font-serif text-3xl md:text-[40px] font-bold md:leading-[50px]">
            Mongabay’s global directory of reforestation and tree-planting projects is a starting
            point for people wanting to support reforestation
          </h1>
          <p className="max-w-2xl mx-auto mt-10 leading-6 md:mt-24">
            To help identify projects that align with a diversity of motivations and interests,
            Mongabay gathered information on 36 criteria that experts say are key to success and
            organized them into categories: contextual, ecological, economic, social, and
            institutional.
          </p>
          <div className="flex flex-col gap-4 mt-10 md:inline-flex md:mt-24 md:flex-row">
            <Button theme="secondary-white" to="/about" className="justify-center md:px-12">
              Learn More
            </Button>
            <Button theme="primary-white" to="/explore" className="justify-center md:px-12">
              Explore the Catalog
            </Button>
          </div>
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
      <div className="py-12 md:py-40 bg-grey-light">
        <LayoutContainer>
          <h2 className="font-serif text-3xl md:text-[40px] text-green md:leading-[56px] max-w-xl font-bold mx-auto text-center">
            Why use the Mongabay Reforestation.app?
          </h2>
          <div className="flex flex-col mt-10 md:flex-row gap-7 md:mt-28">
            <div>
              <div className="flex items-center justify-center w-40 h-40 mx-auto rounded-full bg-green">
                <Image src="/icons/analysis.svg" width={67} height={68} alt="" />
              </div>
              <h3 className="mt-5 md:mt-12 text-xl text-center md:leading-[56px] font-bold text-green font-serif">
                High standards
              </h3>
              <p className="mt-2 text-center">
                Our list of criteria was primarily drawn from the Forest Landscape Restoration (FLR)
                approach, widely heralded as the gold standard across the restoration sector.
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
                Rather than make an assessment (and perceived endorsement) of the quality of the
                projects, Reforestation.app reveals how much information is publicly disclosed by an
                organization.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-40 h-40 mx-auto rounded-full bg-green">
                <Image src="/icons/database.svg" width={56} height={63} alt="" />
              </div>
              <h3 className="mt-5 md:mt-12 text-xl text-center md:leading-[56px] font-bold text-green font-serif">
                A growing catalog
              </h3>
              <p className="mt-2 text-center">
                The community is encouraged to share new projects and update information about
                existing projects to make this catalog the best available resource.
              </p>
            </div>
          </div>
        </LayoutContainer>
      </div>
      <LayoutContainer className="py-12 md:py-40">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-28 md:items-center">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-[40px] text-green font-bold md:leading-[56px] max-w-lg">
              How it works
            </h2>
            <div className="mt-3">
              <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
                Find projects that match your interests
              </h3>
              <p>
                Filter the reforestation catalog using 36 indicators grouped into five categories:
                Context, Ecological, Economic, Institutional and Social.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
                Dig into the details of the project chart
              </h3>
              <p>
                The circular diagram represents the completeness of transparency for each project.
                Clicking through provides more details about the project.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
                Update project information
              </h3>
              <p>
                Anyone can suggest an update to existing projects by filling in the form linked to
                the <span className="font-semibold">Suggest Page Edits</span> button available on
                every project page. All edits get reviewed and verified before being published.
              </p>
            </div>
            <div className="mt-7 md:mt-8">
              <h3 className="font-serif text-xl font-bold text-green md:leading-[56px]">
                Share new projects
              </h3>
              <p>
                To share a new project with Mongabay’s editors, please fill in the form accessible
                via the <span className="font-semibold">Submit Project</span> button at the top of
                every page. We’ll review them once a month.
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
      {!isLoading && !isError && (
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
              {data.slice(0, 10).map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard key={project.id} project={project} tooltip={false} />
                </SwiperSlide>
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
      <div className="py-12 md:py-40 bg-green/10">
        <LayoutContainer>
          <p className="font-serif text-3xl md:text-[40px] md:leading-tight max-w-3xl text-green font-bold">
            Start exploring. Get involved in Mongabay’s global directory of reforestation and
            tree-planting projects.
          </p>
          <Button to="/explore" className="justify-center mt-10 md:inline-flex md:mt-32 md:px-12">
            Explore the Catalog
          </Button>
        </LayoutContainer>
      </div>
    </>
  );
};

export default HomePage;
