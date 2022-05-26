class Api::V1::HealthController < ApplicationController
  def check
    render json: {status: 'ok'}
  end
end
