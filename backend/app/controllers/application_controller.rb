class ApplicationController < ActionController::Base
  include Pagy::Backend
  
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error

  def render_not_found_error(exception)
    render json: {errors: [{title: exception.message}]}, status: :not_found
  end
end
