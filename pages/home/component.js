import React, { useState } from 'react';

import StaticPage from 'layout/static-page';
import CatalogueFilter from 'components/catalogue/filter/component';

import { getCatalogueFiltered } from 'services/catalogue';

import './style.scss';
import ProjectCard from 'components/project/card/component';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  return (
    <StaticPage className="p-home">
      <div className="navigation-bar">
        <button type="button" className="btn btn-outline-secondary">
          Methodology
        </button>
        <button type="button" className="btn btn-primary">
          Submit Project Info
        </button>
      </div>
      <div className="main-container">
        <h1>A Tree Planting Project Directory</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, ligula et dignissim aliquet, mauris nisl tincidunt velit, sit amet posuere dolor odio quis diam. Phasellus leo magna, facilisis eget eleifend vitae, aliquam non massa. Mauris quis vestibulum erat. Integer pellentesque elit id neque ornare accumsan. Maecenas a consectetur ligula. Etiam rhoncus lacinia urna eu bibendum. Aliquam scelerisque ut tellus vel vulputate. Vivamus arcu risus, maximus eu tellus et, pretium blandit quam. Fusce in egestas odio. In rhoncus aliquet ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis sed neque sed ultrices. Cras at vestibulum diam. Donec et lacus et orci dignissim dapibus ut in odio. Etiam laoreet sapien in varius dapibus. Aliquam erat volutpat.
        </p>
        <div className="data-container">
          <CatalogueFilter onChange={filters => setProjects(getCatalogueFiltered(filters))} />
          <div className="projects-list">
            <div className="row">
              {projects &&
                projects.map(p => (
                  <div key={p['Project Number']} className="column">
                    <ProjectCard project={p} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </StaticPage>
  );
};

export default HomePage;
