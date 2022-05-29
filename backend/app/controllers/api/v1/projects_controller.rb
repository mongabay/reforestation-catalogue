class Api::V1::ProjectsController < ApplicationController
  def index
    # TODO:
    # Sorterer
    # exception if category does not exist
    if params['sort_by'].present?
      @category = Category.where(slug: "#{params['sort_by']}_category").first
      exit unless @category.present?

      if params['order']&.downcase = 'asc'
        @projects = @category.projects_asc
      else
        @projects = @category.projects_desc
      end
    else
      @projects = Project.all
    end
    # TODO:
    # Filterer
    filters_slugs = Filter.all.pluck(:slug)
    filters_to_apply = []
    filters_slugs.each do |filter_slug|
      if params.include?(filter_slug)
        filters_to_apply.push(Filter.where(slug: filter_slug).first)
      end
    end

    if filters_to_apply.any?
      filters_to_apply.each do |filter_to_apply|
        if filter_to_apply.query_mode_greater_or_equal_than?
          @projects = @projects.where("#{filter_to_apply.slug} >= : value", value: params[filter_to_apply.slug])
        end
      end
    end
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
    byebug

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
    (params[:page_number] || 1).to_i
  end

  def per_page
    (params[:page_size] || 20).to_i
  end
end
