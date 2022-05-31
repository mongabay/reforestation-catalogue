class Api::V1::StaticPagesController < ApplicationController
  def show
    # TODO
    # Fetch object before show
    @page = StaticPage.where(slug: params['slug']).first
    
    render json: StaticPageSerializer.new(
      @page
      # links
      # meta
    ).serializable_hash
  end
end
