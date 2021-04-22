import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { COUNTRIES_SPECIAL_VALUES } from 'types';

import { ECOLOGICAL_CATEGORY } from 'services/catalogue';

// components
import CatalogueFilter from 'components/catalogue/filter/component';
import Select from 'components/forms/select';
import ProjectCard from 'components/project/card/component';

// utils
import { getCatalogueData } from 'services/catalogue';
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

function HomePageLayout(props) {
  const { projects, sort, updateData, countries, updateCountry } = props;
  // const sortProjects = projectsArray =>
  //   setProjects([
  //     ...projectsArray.sort((a, b) => {
  //       if (sortSelected === ALPHABETICAL_OPTION) {
  //         return a.projectName > b.projectName ? 1 : -1; // eslint-disable-line
  //       } else if (sortSelected === START_DATE_OPTION) {
  //         return a.startYear > b.startYear ? 1 : -1; // eslint-disable-line
  //       } else if (sortSelected === END_DATE_OPTION) {
  //         return a.endYear > b.endYear ? 1 : -1; // eslint-disable-line
  //       } else if (sortSelected === ECOLOGICAL_OPTION) {
  //         const aEcoValue = getProjectCategoriesPercentage(a)[ECOLOGICAL_CATEGORY];
  //         const bEcoValue = getProjectCategoriesPercentage(b)[ECOLOGICAL_CATEGORY];
  //         return bEcoValue - aEcoValue;
  //       }
  //     }),
  //   ]);

  useEffect(() => {
    getCatalogueData()
      .then(response => {
        updateData(response.data);
      })
      .catch(error => console.error(error));
    updateCountry();
  }, []);

  // useEffect(() => {
  //   sortProjects(projects);
  // }, [sortSelected]);

  return (
    <div className="home-layout">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, ligula et dignissim
          aliquet, mauris nisl tincidunt velit, sit amet posuere dolor odio quis diam. Phasellus leo
          magna, facilisis eget eleifend vitae, aliquam non massa. Mauris quis vestibulum erat.
          Integer pellentesque elit id neque ornare accumsan. Maecenas a consectetur ligula. Etiam
          rhoncus lacinia urna eu bibendum. Aliquam scelerisque ut tellus vel vulputate. Vivamus
          arcu risus, maximus eu tellus et, pretium blandit quam. Fusce in egestas odio. In rhoncus
          aliquet ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Pellentesque facilisis sed neque sed ultrices. Cras at vestibulum diam.
          Donec et lacus et orci dignissim dapibus ut in odio. Etiam laoreet sapien in varius
          dapibus. Aliquam erat volutpat.
        </p>
        <div className="data-container">
          <CatalogueFilter
            onCategoryChange={value => setCategorySelected(value)}
            onChange={filters => {
              // sortProjects(getCatalogueFiltered(filters));
            }}
          />
          <div className="projects-list">
            <div className="list-header">
              <div className="sort-container">
                <label htmlFor="sort-select">Sort by</label>
                <Select
                  id="sort-select"
                  options={SORT_OPTIONS}
                  defaultValue={sort}
                  onChange={({ value }) => {
                    setSortSelected(value);
                  }}
                />
              </div>
              <div className="country-container">
                <label htmlFor="country-select">Country: </label>
                <Select
                  id="country-select"
                  options={countries.map(c => ({ value: c, label: c }))}
                  onChange={({ value }) => updateCountry(value)}
                />
              </div>
            </div>
            <div className="row">
              {projects &&
                projects.map(p => (
                  <div key={p.projectNumber} className="column">
                    <ProjectCard project={p} highlightedCategory={null} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePageLayout.propTypes = {
  projects: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
};

export default HomePageLayout;
