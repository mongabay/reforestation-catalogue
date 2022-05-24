import { Categories } from 'types';

import { fetchProjects } from './projects';

export const fetchAboutPageContent = async () => {
  const CONTENT =
    '<h2>About the project section</h2><p>Tree-planting projects and initiatives are more popular than ever, with hundreds of projects across the globe led by private companies, nonprofits, institutions, governments, and communities. So how can an investor or donor decide what projects to support? What kinds of questions should we be asking to assess tree-planting projects and ensure they deliver the results they promise?</p><p>Mongabay seeded this database to organize research into what tree-planting and reforestation projects publicly disclose relevant to the criteria that experts say are keys to success. We thought this would be a useful starting point for people wanting to fund reforestation, so they could identify projects that align with their interests and ask these organizations meaningful questions. The 36 project criteria are primarily drawn from the Forest Landscape Restoration (FLR) approach, widely heralded as the gold standard across the restoration sector. The FLR approach centers on the people that depend on the forest, aiming to restore ecological functionality while enhancing human well‐being, with a strong focus on monitoring and adapting the project to changes over time.</p><p>Rather than make an assessment of the quality of the projects, an undertaking that requires ample time and expertise, Mongabay’s index is based on transparency. We ask: how much information is publicly disclosed by an organization?</p><p>An important caveat is that our database is based entirely on an organization’s self-reporting. Currently, no formal third-party certification or verification process exists for restoration projects. The absence of information on an organization’s website doesn’t necessarily mean the organization has neglected to address those criteria. However, transparency is a signal that an organization is aware of the complexities involved in a successful restoration project and has both the staff and capacity to organize, monitor, and report back on their results. If an organization does not disclose this information, it may be prudent to ask why.</p><h2>Project information update</h2><p>This tool contains publicly available information on more than {{projectsCount}} tree-planting projects in 80 countries. We anticipate that organizations may want to be added to this directory or update their index scores to reflect changes in their disclosure or to correct errors on our part. Pending information will be reviewed prior to publication and assessed quarterly.<br>Updating existing projects can be done by filling in the form linked to the <b>Suggest Page Edits</b> button available on every project page.<br>To share a new project, please fill in the form accessible via the <b>Submit Project</b> button at the top of every page.</p><h2>Methods and sources</h2><p>This web application was designed and built by Vizzuality. The rationale for selecting the 36 criteria included in the database was drawn primarily from the following sources:</p><ul><li>Chazdon, R., & Brancalion, P. (2019). Restoring forests as a means to many ends. Science, 365(6448), 24-25. doi: <a href="https://science.sciencemag.org/content/365/6448/24.full">10.1126/science.aax9539</a></li><li>Di Sacco, A., Hardwick, K. A., Blakesley, D., Brancalion, P. H., Breman, E., Cecilio Rebola, L., ... Antonelli, A. (2021). Ten golden rules for reforestation to optimize carbon sequestration, biodiversity recovery and livelihood benefits. Global Change Biology, 27(7), 1328-1348. doi: <a href="https://onlinelibrary.wiley.com/doi/10.1111/gcb.15498">10.1111/gcb.15498</a></li><li>Diederichsen, A., Gatti, G., Nunes, S., & Pinto, A. (2017). Diagnostic of Key Success Factors for Forest Landscape Restoration. Imazon: Belém-PA, Brazil</li><li>Höhl, M., Ahimbisibwe, V., Stanturf, J. A., Elsasser, P., Kleine, M., & Bolte, A. (2020). Forest Landscape Restoration — What Generates Failure and Success? Forests, 11(9), 938. doi: <a href="https://www.mdpi.com/1999-4907/11/9/938">10.3390/f11090938</a></li><li>Stanturf, J. A., & Mansourian, S. (2017). Implementing forest landscape restoration, a practitioner\'s guide. International Union of Forest Research Organizations, 1-128.</li></ul>';

  let projectsCount = '−';
  try {
    const projects = await fetchProjects([], '', Categories.Context);
    projectsCount = `${projects.length}`;
  } catch (e) {
    console.error(e);
  }

  return CONTENT.replace('{{projectsCount}}', projectsCount);
};
