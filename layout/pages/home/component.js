import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { COUNTRIES_SPECIAL_VALUES } from 'types';

// components
import CatalogueFilter from 'components/catalogue/filter';
import Select from 'components/forms/select';
import ProjectCard from 'components/project/card';

// services
import { getCatalogueData, SORT_OPTIONS } from 'services/catalogue';
import { getConfigData } from 'services/config';

// styles
import './style.scss';
import Header from 'layout/header/component';

function HomePageLayout(props) {
  const {
    projects,
    sort,
    country,
    filters,
    initialQuery,
    updateData,
    setConfig,
    countries,
    updateCountry,
    updateSort,
    loadInitialState,
    projectsPage,
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
        filters: JSON.parse(filtersInitialQuery),
      });
    } else {
      updateCountry(COUNTRIES_SPECIAL_VALUES.ALL);
      updateSort(SORT_OPTIONS[0].value);
    }
    // ------ LOAD DATA ------------
    // ---- load config -------------
    getConfigData()
      .then(response => setConfig(response.data))
      .catch(error => console.error(error));
    // ---- load projects
    getCatalogueData()
      .then(response => updateData(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const newRoute = `/?sort=${encodeURIComponent(sort)}&country=${encodeURIComponent(
      country
    )}&filters=${encodeURIComponent(JSON.stringify(filters))}`;
    router.push(newRoute, undefined, { shallow: true });
  }, [sort, country, filters]);

  console.log('projectsPage', projectsPage);

  return (
    <div className="home-layout">
      <Header />
      <div className="main-container">
        <div className="top-container">
          <div className="column col-sm-10 col-md-8 col-xl-6 col-offset-1">
            <div className="title">
              <h2>{`MONGABAY'S`}</h2>
              <h1>REFORESTATION DIRECTORY</h1>
            </div>
            <hr />
            <p>{projectsPage?.descriptionText}</p>
          </div>
        </div>
        <div className="data-container">
          <div className="left-container">
            <div className="intro-container">
              <h3>A Transparency Index.</h3>
              <div className="legend-text">
                <p>
                  The fingerprint of each project results from five lines representing the
                  proportion of reported indicators within five categories:{' '}
                  <span className="-bold">context</span>, <span className="-bold">ecological</span>,{' '}
                  <span className="-bold">economic</span>, <span className="-bold">social</span>,
                  and
                  <span className="-bold"> institutional</span>.
                </p>
                <p className="-italic">Finalized projects represented in gray.</p>
              </div>
            </div>
            <div className="intro-filters-container">
              <h3>{projectsPage?.findProjectsOfInterestTitle}</h3>
              <p>{projectsPage?.fintProjectsOfInterestDescription}</p>
              <CatalogueFilter />
            </div>
          </div>
          <div className="right-container">
            <div className="projects-list">
              <div className="list-header">
                <div className="sort-container">
                  <label htmlFor="sort-select">Sort by category</label>
                  <Select
                    id="sort-select"
                    options={SORT_OPTIONS}
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
              <div className="row justify-content-between">
                {projects &&
                  projects.map(p => (
                    <motion.div
                      key={p.projectNumber}
                      className="column"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ProjectCard project={p} highlightedCategory={sort} />
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePageLayout.propTypes = {
  projects: PropTypes.array.isRequired,
  projectsPage: PropTypes.object.isRequired,
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
  setConfig: PropTypes.func.isRequired,
};

export default HomePageLayout;
