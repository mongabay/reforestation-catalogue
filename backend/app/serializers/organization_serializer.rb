class OrganizationSerializer
  include JSONAPI::Serializer

  attributes :id, :name, :permanence, :ecological, :social, :financial,
    :primary_organization_url, :data_sources, :org_type, :year_founded,
    :country_hq, :estimated_impact_trees, :estimated_impact_hectares,
    :geography, :carbon_credits, :public_facing_spatial_results,
    :project_selection_standards, :addressing_drivers_of_deforestation,
    :land_tenure, :maintenance_duration, :management_plans,
    :monitoring_protocols, :monitoring_of_tree_indicators,
    :availability_of_data_on_tree_indicators, :monitoring_duration,
    :monitoring_frequency, :verification, :tree_species_selection,
    :tree_seed_source_restrictions, :addressing_potential_negative_ecological_consequences,
    :monitoring_biodiversity_environmental_indicators, :local_community_involvement,
    :addressing_potential_social_negative_consequences, :support_for_landholders,
    :monitoring_of_benefits_to_locals, :availability_of_data_on_benefits_to_locals,
    :monitoring_of_gender_and_beneficiary_demographics, :availability_of_gender_and_beneficiary_demographics,
    :primary_funding_sources, :funding_duration_for_maintenance_and_stewardship,
    :parties_responsible_for_maintenance_identified, :disclosure_of_cost_split_to_local_projects,
    :ribbons, :program_names, :goals_class, :targets, :tree_growing_methods,
    :geographylist, :funding, :forms_of_intermediary_support, :applied_standards,
    :dashboards_and_apps, :created_at, :updated_at

  attribute :display_name do |organization|
    organization.display_name
  end

  attribute :impact_summary do |organization|
    organization.impact_summary
  end

  attribute :org_type_display do |organization|
    organization.org_type&.humanize
  end

  attribute :carbon_credits_display do |organization|
    organization.carbon_credits ? "Yes" : "No"
  end

  attribute :public_facing_spatial_results_display do |organization|
    organization.public_facing_spatial_results ? "Yes" : "No"
  end
end
