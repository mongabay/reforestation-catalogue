class ApplicationController < ActionController::Base
  include Pagy::Backend
  
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
end
