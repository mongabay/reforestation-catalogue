class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.integer :project_number
      t.string :project_name
      t.string :lead_organization
      t.string :organization_type
      t.string :who_is_involved
      t.string :project_org_url
      t.boolean :has_project_partners
      t.string :partner_name
      t.integer :start_year
      t.integer :end_year
      t.string :country
      t.string :country_code
      t.float :size_of_project_ha
      t.integer :trees_planted_number
      t.boolean :has_explicit_location
      t.string :forest_type
      t.string :primary_objective_purpose
      t.string :approach
      t.boolean :identify_deforestation_driver
      t.boolean :fire_prevention
      t.boolean :has_justification_for_approach
      t.boolean :addresses_known_threats
      t.boolean :discloses_species_used
      t.boolean :use_native_species
      t.boolean :use_exotic_species
      t.boolean :local_seedling_nurseries
      t.string :financial_model
      t.string :name_org_donor
      t.boolean :has_public_reports
      t.boolean :follow_up_disclosed
      t.string :type_of_follow_up
      t.boolean :has_community_involvement
      t.boolean :has_gender_component
      t.boolean :scientific_research_associated_with_project
      t.boolean :news_articles_associated_with_project
      t.string :comment

      t.timestamps
    end
  end
end
