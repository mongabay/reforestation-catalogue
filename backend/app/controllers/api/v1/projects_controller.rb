class Api::V1::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    # TODO:
    # Filterer, Sorterer, pagination
    
    render json: ProjectSerializer.new(
      @projects
      # links
      # meta
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
end
