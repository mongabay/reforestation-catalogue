class Api::V1::CategoriesController < ApplicationController
  def index
    
    @categories = Category.all
    @pagy, @categories = pagy(@categories, page: current_page, items: per_page)

    options = {}
    options[:include] = [:filters]
    
    render json: CategorySerializer.new(
      @categories,
      options 
    ).serializable_hash
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
end
