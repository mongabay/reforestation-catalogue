import React from 'react';

import Image from 'next/image';

import Head from 'components/head';
import LayoutContainer from 'components/layout-container';
import { StaticPageLayoutProps } from 'layouts/static-page';
import { PageComponent } from 'types';

const CONTENT =
  '<h2>About the project</h2><p>Tree planting projects and initiatives are more popular than ever, with hundreds of projects across the globe led by private companies, non-profits, institutions, governments, and communities. So how can an investor or donor decide what projects to support? What kinds of questions should we be asking to assess tree-planting projects and ensure they are delivering the results they promise?</p><p>Mongabay seeded this database to organize research into what tree-planting and reforestation projects publicly disclose relevant to the criteria that experts say are keys to success. We thought this would be a useful starting point for people wanting to fund reforestation, so they could identify projects that align with their interests and ask these organizations meaningful questions. The 36 project criteria are primarily drawn from the Forest Landscape Restoration (FLR) approach, widely heralded as the gold standard across the restoration sector. The FLR approach centers on the people that depend on the forest, aiming to restore ecological functionality while enhancing human well‐being, with a strong focus on monitoring and adapting the project to changes over time.</p><p>Rather than make an assessment of the quality of the projects, an undertaking that requires ample time and expertise, Mongabay’s index is based on transparency. We ask: how much information is publicly disclosed by an organization?</p><p>An important caveat is that our database is based entirely on an organization’s self-reporting. Currently, no formal third-party certification or verification process exists for restoration projects. The absence of information on an organization’s website doesn’t necessarily mean the organization has neglected to address those criteria. However, transparency is a signal that an organization is aware of the complexities involved in a successful restoration project and has both the staff and capacity to organize, monitor, and report back on their results. If an organization does not disclose this information, it may be prudent to ask why.</p><h2>Project information update</h2><p>This tool contains publicly available information on more than 350 tree-planting projects in 80 countries. We anticipate that organizations may want to be added to this directory or will want to update their index scores to reflect changes in their disclosure or to correct errors on our part. Pending information will be reviewed prior to publication and assessed quarterly.</p><ul><li>Updating existing projects can be done by filling in the form linked to the <a href="https://docs.google.com/forms/d/e/1FAIpQLScqpjjjfEbsYR0Vvu1kWaA9ctQsYO-5GvYBFDb6ZWRJyoBAeA/viewform">Suggest Page Edits</a> button available on every project page.</li><li>To share a new project, please fill in the form accessible via the <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_3n3y5KwJccpo9uKWc_-Nc__zXR7wfc793s8nL6x8J0bGhA/viewform">Submit Project Information</a> button at the top of every page.</li></ul><h2>Methods and Sources</h2><p>This web application was designed and built by Vizzuality. The rationale for selecting the 36 criteria included in the database was drawn primarily from the following sources:</p><ul><li>Chazdon, R., & Brancalion, P. (2019). Restoring forests as a means to many ends. Science, 365(6448), 24-25. doi:<a href="https://science.sciencemag.org/content/365/6448/24.full">10.1126/science.aax9539</a></li><li>Di Sacco, A., Hardwick, K. A., Blakesley, D., Brancalion, P. H., Breman, E., Cecilio Rebola, L., ... Antonelli, A. (2021). Ten golden rules for reforestation to optimize carbon sequestration, biodiversity recovery and livelihood benefits. Global Change Biology, 27(7), 1328-1348. doi: <a href="https://onlinelibrary.wiley.com/doi/10.1111/gcb.15498">10.1111/gcb.15498</a></li><li>Diederichsen, A., Gatti, G., Nunes, S., & Pinto, A. (2017). Diagnostic of Key Success Factors for Forest Landscape Restoration. Imazon: Belém-PA, Brazil</li><li>Höhl, M., Ahimbisibwe, V., Stanturf, J. A., Elsasser, P., Kleine, M., & Bolte, A. (2020). Forest Landscape Restoration — What Generates Failure and Success? Forests, 11(9), 938. doi:<a href="https://www.mdpi.com/1999-4907/11/9/938">10.3390/f11090938</a></li><li>Stanturf, J. A., & Mansourian, S. (2017). Implementing forest landscape restoration, a practitioner\'s guide. International Union of Forest Research Organizations, 1-128.</li></ul>';

export const AboutPage: PageComponent<{}, StaticPageLayoutProps> = (props) => {
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
          <div className="cms-content" dangerouslySetInnerHTML={{ __html: CONTENT }} />
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
