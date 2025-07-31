class Api::V1::OrganizationsController < ApplicationController
  def index
    @organizations = Api::Organizations::Sorter.new(params["sort_by"], params["order"]).call
    organizations_total = @organizations.count
    @organizations = Api::Organizations::Filter.new(@organizations, filters_to_apply).call if filters_to_apply.any?
    search = params["search"]
    @organizations = Api::Organizations::Searcher.new(@organizations, search).call if (search.present? and search.class == String)
    organizations_matching_query = @organizations
    @pagy, @organizations = pagy(@organizations, page: current_page, items: per_page)

    options = {}
    options[:meta] = {
      organizations_total: organizations_total,
      organizations_matching_query: @pagy.count,
      from: @pagy.from,
      to: @pagy.to,
      pages: @pagy.pages,
      current_page: current_page
    }

    render json: OrganizationSerializer.new(
      @organizations,
      options
    ).serializable_hash.to_json
  end

  def show
    @organization = Organization.find(params["id"])

    render json: OrganizationSerializer.new(
      @organization
    ).serializable_hash
  end

  def create
    @organization = Organization.new(organization_params)

    if @organization.save
      render json: OrganizationSerializer.new(
        @organization
      ).serializable_hash
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def update
    @organization = Organization.find(params["id"])

    if @organization.update(organization_params)
      render json: OrganizationSerializer.new(
        @organization
      ).serializable_hash
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  private

  def organization_params
    params.require(:organization).permit(
      :name, :permanence, :ecological, :social, :financial, :primary_organization_url,
      :data_sources, :org_type, :year_founded, :country_hq, :estimated_impact_trees,
      :estimated_impact_hectares, :geography, :carbon_credits, :public_facing_spatial_results,
      :project_selection_standards, :addressing_drivers_of_deforestation, :land_tenure,
      :maintenance_duration, :management_plans, :monitoring_protocols, :monitoring_of_tree_indicators,
      :availability_of_data_on_tree_indicators, :monitoring_duration, :monitoring_frequency,
      :verification, :tree_species_selection, :tree_seed_source_restrictions,
      :addressing_potential_negative_ecological_consequences, :monitoring_biodiversity_environmental_indicators,
      :local_community_involvement, :addressing_potential_social_negative_consequences,
      :support_for_landholders, :monitoring_of_benefits_to_locals, :availability_of_data_on_benefits_to_locals,
      :monitoring_of_gender_and_beneficiary_demographics, :availability_of_gender_and_beneficiary_demographics,
      :primary_funding_sources, :funding_duration_for_maintenance_and_stewardship,
      :parties_responsible_for_maintenance_identified, :disclosure_of_cost_split_to_local_projects,
      :ribbons, :program_names, :goals_class, :targets, :tree_growing_methods, :geographylist,
      :funding, :forms_of_intermediary_support, :applied_standards, :dashboards_and_apps
    )
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
    
    # Basic filters
    %w[name country_hq org_type year_founded geography carbon_credits 
       public_facing_spatial_results estimated_impact_trees estimated_impact_hectares
       permanence ecological social financial].each do |filter_key|
      if params.include?(filter_key)
        filters_to_apply[filter_key] = params[filter_key]
      end
    end

    # Array field filters
    %w[goals_class tree_growing_methods funding applied_standards].each do |filter_key|
      if params.include?(filter_key)
        filters_to_apply[filter_key] = params[filter_key]
      end
    end

    filters_to_apply
  end
end 