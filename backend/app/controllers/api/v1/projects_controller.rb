class Api::V1::ProjectsController < ApplicationController
  def index
    # TODO:
    # exception if category does not exist
    @projects = Api::Sorter.new(params['sort_by'], params['order']).call
    # TODO: sorter service applies the 'approved' scope
    # this should be refactored because that is not the sorter's responsibility
    projects_total = @projects.count
    @projects = Api::Filter.new(@projects, filters_to_apply).call if filters_to_apply.any?
    search = params['search']
    @projects = Api::Searcher.new(@projects, search).call if (search.present? and search.class == String)
    projects_matching_query = @projects
    @pagy, @projects = pagy(@projects, page: current_page, items: per_page)

    options = {}
    # TODO
    # options[:links]
    options[:meta] = {
      projects_total: projects_total,
      projects_matching_query: @pagy.count,
      from: @pagy.from,
      to: @pagy.to,
      pages: @pagy.pages,
      current_page: current_page
    }
    
    render json: ProjectSerializer.new(
      @projects,
      options
    ).serializable_hash.to_json
  end

  def show
    # TODO
    # Fetch object before show
    @project = Project.approved.find(params['id'])
    
    render json: ProjectSerializer.new(
      @project
      # links
      # meta
    ).serializable_hash
  end

  def create
    @project = Project.new(parsed_project_params)
    
    if @project.save
      render json: ProjectSerializer.new(
        @project
        # links
        # meta
      ).serializable_hash
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def update
    # Fetch object before update
    @project = Project.find(params['id']) # this is an approved project

    # It was unexpected, but we need to keep the current version approved and have a duplicate pending
    @new_project = @project.dup
    @new_project.assign_attributes(parsed_project_params.merge(approved: false, previous_version_id: @project.id))
    if @new_project.save
      render json: ProjectSerializer.new(
        @new_project
        # links
        # meta
      ).serializable_hash
    else
      render json: @new_project.errors, status: :unprocessable_entity
    end
  end

  def project_params
    params.require(:project).permit(
      :project_name,
      :lead_organization,
      :organization_type,
      :project_org_url,
      :has_project_partners,
      :partner_name,
      :start_year,
      :end_year,
      :country,
      :country_code,
      :size_of_project_ha,
      :trees_planted_number,
      :has_explicit_location,
      :identify_deforestation_driver,
      :fire_prevention,
      :has_justification_for_approach,
      :addresses_known_threats,
      :discloses_species_used,
      :use_native_species,
      :use_exotic_species,
      :local_seedling_nurseries,
      :name_org_donor,
      :has_public_reports,
      :follow_up_disclosed,
      :has_community_involvement,
      :has_gender_component,
      :scientific_research_associated_with_project,
      :news_articles_associated_with_project,
      :comment,
      :forest_type => [],
      :primary_objective_purpose => [],
      :approach => [],
      :financial_model => [],
      :type_of_follow_up => [],
      :who_is_involved => [],
      :project_contacts_attributes => [:email, :name, :company],
      :project_links_attributes => [:url, :title, :description])
  end

  # This method takes from project_params all
  # array of integers and translate each into the string in the enum
  # then it returns params with enum_arrays
  # TODO: Figure out why for god sake I can create a project using arrays of integers
  # Project.create(forest_type: [0,1,2]) will not work
  #
  def parsed_project_params
    parsed_params = project_params

    parsed_params.each do |key, value|
      if value.class == Array
        if Project::PROJECT_ENUMS.include?(key)
          new_value = []
          value.each do |array_item|
            new_value.push(Project.send(key.pluralize).map { |k, v| k if v == array_item}.compact.first)
          end
          parsed_params[key] = new_value
        end
      end
    end
  end

  def current_page
    return 1 if params[:page_number].blank?
    return 1 if params[:page_number].to_i <= 0
    (params[:page_number] || 1).to_i
  end

  def per_page
    return 20 if params[:page_size].blank?
    return 20 if params[:page_size].to_i <= 0

    (params[:page_size] || 20).to_i
  end

  def filters_to_apply
    filters_to_apply = {}
    filters_slugs = Filter.all.pluck(:slug)
    # TODO: please, find a more elegant way to handle this
    # highlighted and who_is_involved are a filter that does not belong to any category
    #
    filters_slugs.push('highlighted')
    filters_slugs.push('who_is_involved')
    filters_slugs.each do |filter_slug|
      if params.include?(filter_slug)
        # filters_to_apply.push(Filter.where(slug: filter_slug).first)
        filters_to_apply[filter_slug] = params[filter_slug]
      end
    end

    filters_to_apply
  end
end
