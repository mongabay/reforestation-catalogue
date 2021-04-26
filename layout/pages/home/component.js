import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { COUNTRIES_SPECIAL_VALUES, SORT_OPTIONS } from 'types';

import { ECOLOGICAL_CATEGORY } from 'services/catalogue';

// components
import CatalogueFilter from 'components/catalogue/filter/component';
import Select from 'components/forms/select';
import ProjectCard from 'components/project/card/component';

// utils
import { getCatalogueData } from 'services/catalogue';

// constants
import { SORT_OPTIONS_ARRAY } from './constants';

// styles
import './style.scss';

function HomePageLayout(props) {
  const {
    projects,
    sort,
    country,
    filters,
    initialQuery,
    updateData,
    countries,
    updateCountry,
    updateSort,
    loadInitialState,
  } = props;

  const {
    country: countryInitialQuery,
    sort: sortInitialQuery,
    filters: filtersInitialQuery,
  } = initialQuery;
  const router = useRouter();

  useEffect(() => {
    // Load params into Redux if they're present in the URL when loading
    if (countryInitialQuery || sortInitialQuery || filtersInitialQuery) {
      loadInitialState({
        country: countryInitialQuery,
        sort: sortInitialQuery,
        filters: filtersInitialQuery,
      });
    } else {
      updateCountry(COUNTRIES_SPECIAL_VALUES.ALL);
      updateSort(SORT_OPTIONS.ALPHABETICAL_OPTION);
    }
    getCatalogueData()
      .then(response => {
        updateData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const newRoute = `/?sort=${encodeURIComponent(sort)}&country=${encodeURIComponent(
      country
    )}&filters=${encodeURIComponent(filters)}`;
    router.push(newRoute, undefined, { shallow: true });
  }, [sort, country, filters]);

  return (
    <div className="home-layout">
      <div className="navigation-bar">
        <button type="button" className="btn btn-outline-secondary">
          Methodology
        </button>
        <button type="button" className="btn btn-primary">
          Submit Project Information
        </button>
      </div>
      <div className="main-container">
        <div className="top-container row">
          <div className="column col-sm-10 col-md-8 col-xl-6">
            <div className="title">
              <h2>{`MONGABAY'S`}</h2>
              <h1>REFORESTATION DIRECTORY</h1>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, ligula et
              dignissim aliquet, mauris nisl tincidunt velit, sit amet posuere dolor odio quis diam.
              Phasellus leo magna, facilisis eget eleifend vitae, aliquam non massa. Mauris quis
              vestibulum erat. Integer pellentesque elit id neque ornare accumsan. Maecenas a
              consectetur ligula. Etiam rhoncus lacinia urna eu bibendum. Aliquam scelerisque ut
              tellus vel vulputate. Vivamus arcu risus, maximus eu tellus et, pretium blandit quam.
              Fusce in egestas odio. In rhoncus aliquet ex. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis sed neque sed
              ultrices. Cras at vestibulum diam. Donec et lacus et orci dignissim dapibus ut in
              odio. Etiam laoreet sapien in varius dapibus. Aliquam erat volutpat.
            </p>
          </div>
        </div>
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
                  options={SORT_OPTIONS_ARRAY}
                  defaultValue={sort}
                  value={sort}
                  onChange={({ value }) => {
                    updateSort(value);
                  }}
                />
              </div>
              <div className="country-container">
                <label htmlFor="country-select">Country: </label>
                <Select
                  id="country-select"
                  options={countries.map(c => ({ value: c, label: c }))}
                  onChange={({ value }) => updateCountry(value)}
                  defaultValue={country}
                  value={country}
                />
              </div>
            </div>
            <div className="row">
              {projects &&
                projects.map(p => (
                  <motion.div
                    key={p.projectNumber}
                    className="column"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ProjectCard project={p} highlightedCategory={null} />
                  </motion.div>
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
  country: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
  initialQuery: PropTypes.object.isRequired,
  updateData: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
  updateSort: PropTypes.func.isRequired,
  updateFilters: PropTypes.func.isRequired,
  loadInitialState: PropTypes.func.isRequired,
};

export default HomePageLayout;
