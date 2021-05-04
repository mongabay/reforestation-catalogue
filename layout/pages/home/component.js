import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import classnames from 'classnames';

import { Category, COUNTRIES_SPECIAL_VALUES, EmbedTypes } from 'types';

// components
import CatalogueFilter from 'components/catalogue/filter';
import Select from 'components/forms/select';
import ProjectCard from 'components/project/card';
import RadialChart from 'components/radial-chart';

// services
import { getCatalogueData, SORT_OPTIONS } from 'services/catalogue';
import { getConfigData } from 'services/config';

// styles
import Header from 'layout/header';

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
    totalNumberOfProjects,
    embed,
    embedType,
  } = props;

  const {
    country: countryInitialQuery,
    sort: sortInitialQuery,
    filters: filtersInitialQuery,
    embed: embedInitialQuery,
    embedType: embedTypeInitialQuery,
  } = initialQuery;
  const router = useRouter();

  useEffect(() => {
    // Load params into Redux if they're present in the URL when loading
    if (countryInitialQuery || sortInitialQuery || filtersInitialQuery) {
      loadInitialState({
        country: countryInitialQuery,
        sort: sortInitialQuery,
        filters: JSON.parse(filtersInitialQuery),
        embed: embedInitialQuery === true || embedInitialQuery === 'true',
        embedType: embedTypeInitialQuery,
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
    )}&filters=${encodeURIComponent(
      JSON.stringify(filters)
    )}&embed=${embed}&embedType=${embedType}`;
    router.push(newRoute, undefined, { shallow: true });
  }, [sort, country, filters, embed, embedType]);

  const projectsLength = projects.length;
  const projectsPercentage = Math.round((projectsLength * 100.0) / totalNumberOfProjects);
  const isEmbedFilters = embed && embedType === EmbedTypes.Filters;
  const isEmbedProjectList = embed && embedType === EmbedTypes.ProjectList;

  return (
    <div className="home-layout">
      {!embed && <Header />}
      <div className="main-container">
        {!embed && (
          <div className="top-container">
            <div className="column col-sm-10 col-md-8 col-xl-6 col-offset-1">
              <div className="title">
                <h2>{`MONGABAY`}</h2>
                <h1>REFORESTATION DIRECTORY</h1>
              </div>
              <p>{projectsPage?.descriptionText}</p>
            </div>
          </div>
        )}
        <div className="data-container">
          <div
            className={classnames({
              'left-container': true,
              '-hidden': isEmbedProjectList,
              '-no-width-restriction': isEmbedFilters,
            })}
          >
            {!embed && (
              <div className="intro-container">
                <h3>A Transparency Index.</h3>
                <div className="legend-chart">
                  <RadialChart
                    categoriesPercentages={{
                      [Category.Context]: 70,
                      [Category.Ecological]: 70,
                      [Category.Economic]: 70,
                      [Category.Social]: 70,
                      [Category.Institutional]: 70,
                    }}
                    highlightedCategory={sort}
                    legendMode={true}
                  />
                </div>
                <div className="legend-text">
                  <p>
                    The fingerprint of each project results from five lines representing the
                    proportion of reported indicators within five categories:{' '}
                    <span className="-bold">context</span>,{' '}
                    <span className="-bold">ecological</span>,{' '}
                    <span className="-bold">economic</span>, <span className="-bold">social</span>,
                    and
                    <span className="-bold"> institutional</span>.
                  </p>
                  <p className="-italic">Finalized projects represented in gray.</p>
                </div>
              </div>
            )}
            {(!embed || isEmbedFilters) && (
              <div className="intro-filters-container">
                <h3>{projectsPage?.findProjectsOfInterestTitle}</h3>
                <p>{projectsPage?.fintProjectsOfInterestDescription}</p>
                <p className="-bold">
                  {`${projectsLength} projects (${projectsPercentage}%) meet your filtering criteria`}
                </p>
                <CatalogueFilter />
              </div>
            )}
          </div>
          {isEmbedFilters && (
            <div className="embed-filters-button-container">
              <a
                className="btn btn-primary"
                href={`${window.location}`.replace('embed=true', 'embed=false')}
              >
                View on the Reforestation Catalogue
              </a>
            </div>
          )}
          {(!embed || isEmbedProjectList) && (
            <div
              className={classnames({
                'right-container': true,
                '-fullwidth': embed && embedType === EmbedTypes.ProjectList,
              })}
            >
              <div className="projects-list">
                {!embed && (
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
                )}
                <div className="project-cards-container">
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
          )}
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
  totalNumberOfProjects: PropTypes.number.isRequired,
  embed: PropTypes.bool,
  embedType: PropTypes.string,
};

export default HomePageLayout;
