import React, { useState, useEffect, useCallback } from 'react';

import StaticPage from 'layout/static-page';
import CatalogueFilter from 'components/catalogue/filter/component';

import { getCatalogueFiltered, ECOLOGICAL_CATEGORY } from 'services/catalogue';

// components
import Select from 'components/forms/select';
import ProjectCard from 'components/project/card/component';

// utils
import { CATALOGUE_DATA } from 'utils/catalogue-data';
import { getProjectCategoriesPercentage } from 'utils/project';

// constants
import {
  SORT_OPTIONS,
  ALPHABETICAL_OPTION,
  START_DATE_OPTION,
  END_DATE_OPTION,
  ECOLOGICAL_OPTION,
} from './constants';

// styles
import './style.scss';

function HomePage() {
  const [projects, setProjects] = useState(CATALOGUE_DATA);
  const [category, setCategorySelected] = useState(null);
  const [sortSelected, setSortSelected] = useState(ALPHABETICAL_OPTION);

  const sortProjects = () =>
    setProjects([
      ...projects.sort((a, b) => {
        if (sortSelected === ALPHABETICAL_OPTION) {
          return a['Project Name'] > b['Project Name'] ? 1 : -1; // eslint-disable-line
        } else if (sortSelected === START_DATE_OPTION) {
          return a['Start Date'] > b['Start Date'] ? 1 : -1; // eslint-disable-line
        } else if (sortSelected === END_DATE_OPTION) {
          return a['End Date'] > b['End Date'] ? 1 : -1; // eslint-disable-line
        } else if (sortSelected === ECOLOGICAL_OPTION) {
          const aEcoValue = getProjectCategoriesPercentage(a)[ECOLOGICAL_CATEGORY];
          const bEcoValue = getProjectCategoriesPercentage(b)[ECOLOGICAL_CATEGORY];
          return bEcoValue - aEcoValue;
        }
      }),
    ]);

  useEffect(() => {
    sortProjects();
  }, []);

  useEffect(() => {
    sortProjects();
  }, [sortSelected]);

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
          <CatalogueFilter
            onCategoryChange={value => setCategorySelected(value)}
            onChange={filters => {
              setProjects(getCatalogueFiltered(filters));
              sortProjects();
            }}
          />
          <div className="projects-list">
            <div className="list-header">
              <div className="sort-container">
                <label htmlFor="sort-select">Sort by</label>
                <Select
                  id="sort-select"
                  options={SORT_OPTIONS}
                  defaultValue={sortSelected}
                  onChange={({ value }) => {
                    console.log('sort selected value', value);
                    setSortSelected(value);
                  }}
                />
              </div>
              <div className="country-container">
                <label htmlFor="country-select">Country: </label>
                <Select
                  id="country-select"
                  options={[]}
                />
              </div>
            </div>
            <div className="row">
              {projects &&
                projects.map(p => (
                  <div key={p['Project Number']} className="column">
                    <ProjectCard project={p} highlightedCategory={category} />
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
