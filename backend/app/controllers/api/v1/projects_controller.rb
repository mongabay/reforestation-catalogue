class Api::V1::ProjectsController < ApplicationController
  def index
    # TODO:
    # exception if category does not exist
    @projects = Api::Sorter.new(params['sort_by'], params['order']).call
    @projects = Api::Filter.new(@projects, filters_to_apply).call if filters_to_apply.any?
    
    search = params['search']
    @projects = Api::Searcher.new(@projects, search).call if (search.present? and search.class == String)
      
    @pagy, @projects = pagy(@projects, page: current_page, items: per_page)

    options = {}
    # TODO
    # options[:links]
    options[:meta] = {
      projects_total: Project.all.count,
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
    @project = Project.find(params['id'])
    
    render json: ProjectSerializer.new(
      @project
      # links
      # meta
    ).serializable_hash
  end

  def create
    @project = Project.new(project_params)
    
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
    @project = Project.find(params['id'])
    if @project.update(project_params)
      render json: ProjectSerializer.new(
        @project
        # links
        # meta
      ).serializable_hash
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def project_params
    params.require(:project).permit(
      :project_name,                                                                                     
      :lead_organization,                                                                                
      :organization_type,                                                                                
      :who_is_involved,                                                                                  
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
      :forest_type,
      :primary_objective_purpose,
      :approach,
      :identify_deforestation_driver,
      :fire_prevention,
      :has_justification_for_approach,
      :addresses_known_threats,
      :discloses_species_used,
      :use_native_species,
      :use_exotic_species,
      :local_seedling_nurseries,
      :financial_model,
      :name_org_donor,
      :has_public_reports,
      :follow_up_disclosed,
      :type_of_follow_up,
      :has_community_involvement,
      :has_gender_component,
      :scientific_research_associated_with_project,
      :news_articles_associated_with_project,
      :comment,
      :project_contacts_attributes => [:email, :name, :company],
      :project_links_attributes => [:url, :title, :description])
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
