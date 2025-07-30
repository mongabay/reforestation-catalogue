class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.text :name
      t.text :ribbons, array: true, default: []
      t.float :permanence
      t.float :ecological
      t.float :social
      t.float :financial
      t.text :program_names, array: true, default: []
      t.text :primary_organization_url
      t.text :data_sources
      t.string :org_type
      t.float :year_founded
      t.string :country_hq
      t.text :goals_class, array: true, default: []
      t.text :targets, array: true, default: []
      t.text :tree_growing_methods, array: true, default: []
      t.float :estimated_impact_trees
      t.float :estimated_impact_hectares
      t.string :geography
      t.text :geographylist, array: true, default: []
      t.text :funding, array: true, default: []
      t.text :forms_of_intermediary_support, array: true, default: []
      t.boolean :carbon_credits
      t.text :applied_standards, array: true, default: []
      t.boolean :public_facing_spatial_results
      t.text :dashboards_and_apps, array: true, default: []
      t.integer :project_selection_standards
      t.integer :addressing_drivers_of_deforestation
      t.integer :land_tenure
      t.integer :maintenance_duration
      t.integer :management_plans
      t.integer :monitoring_protocols
      t.integer :monitoring_of_tree_indicators
      t.integer :availability_of_data_on_tree_indicators
      t.integer :monitoring_duration
      t.integer :monitoring_frequency
      t.integer :verification
      t.integer :tree_species_selection
      t.integer :tree_seed_source_restrictions
      t.integer :addressing_potential_negative_ecological_consequences
      t.integer :monitoring_biodiversity_environmental_indicators
      t.integer :local_community_involvement
      t.integer :addressing_potential_social_negative_consequences
      t.float :support_for_landholders
      t.integer :monitoring_of_benefits_to_locals
      t.integer :availability_of_data_on_benefits_to_locals
      t.integer :monitoring_of_gender_and_beneficiary_demographics
      t.integer :availability_of_gender_and_beneficiary_demographics
      t.integer :primary_funding_sources
      t.float :funding_duration_for_maintenance_and_stewardship
      t.integer :parties_responsible_for_maintenance_identified
      t.integer :disclosure_of_cost_split_to_local_projects
    end
  end
end
