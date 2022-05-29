class Api::V1::ProjectsController < ApplicationController
  def index
    # TODO:
    # Sorterer
    # exception if category does not exist
    @projects = Api::Sorter.new(params['sort_by'], params['order']).call
    
    # TODO:
    # Filterer
    @projects = Api::Filter.new(@projects, filters_to_apply).call if filters_to_apply.any?
      
    # TODO:
    # pagination
    @pagy, @projects = pagy(@projects, page: current_page, items: per_page)

    options = {}
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
    ).serializable_hash
  end

  def show
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
    params.require(:project).permit!
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
    filters_slugs.each do |filter_slug|
      if params.include?(filter_slug)
        # filters_to_apply.push(Filter.where(slug: filter_slug).first)
        filters_to_apply[filter_slug] = params[filter_slug].to_i
      end
    end

    filters_to_apply
  end
end
