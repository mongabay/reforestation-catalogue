FactoryBot.define do
  factory :organization do
    name { Faker::Company.name }
    org_type { ['ngo', 'for_profit', 'government', 'academic', 'international_org', 'community_org'].sample }
    year_founded { rand(1950..2020) }
    country_hq { Faker::Address.country }
    geography { Faker::Address.city }
    primary_organization_url { Faker::Internet.url }
    data_sources { Faker::Lorem.sentence }
    
    # Impact metrics
    permanence { rand(0.0..5.0).round(1) }
    ecological { rand(0.0..5.0).round(1) }
    social { rand(0.0..5.0).round(1) }
    financial { rand(0.0..5.0).round(1) }
    estimated_impact_trees { rand(1000..100000) }
    estimated_impact_hectares { rand(10.0..1000.0).round(1) }
    support_for_landholders { rand(0.0..5.0).round(1) }
    funding_duration_for_maintenance_and_stewardship { rand(1.0..10.0).round(1) }
    
    # Array fields
    ribbons { [Faker::Lorem.word, Faker::Lorem.word] }
    program_names { [Faker::Company.buzzword, Faker::Company.buzzword] }
    goals_class { [Faker::Lorem.word, Faker::Lorem.word] }
    targets { [Faker::Lorem.sentence, Faker::Lorem.sentence] }
    tree_growing_methods { ['Direct seeding', 'Nursery planting'] }
    geographylist { [Faker::Address.country, Faker::Address.country] }
    funding { ['Government grants', 'Private donations'] }
    forms_of_intermediary_support { ['Technical assistance', 'Financial support'] }
    applied_standards { ['FSC', 'PEFC'] }
    dashboards_and_apps { ['Web dashboard', 'Mobile app'] }
    
    # Boolean fields
    carbon_credits { [true, false].sample }
    public_facing_spatial_results { [true, false].sample }
    
    # Integer scoring fields (typically 0-5 scale)
    project_selection_standards { rand(0..5) }
    addressing_drivers_of_deforestation { rand(0..5) }
    land_tenure { rand(0..5) }
    maintenance_duration { rand(0..5) }
    management_plans { rand(0..5) }
    monitoring_protocols { rand(0..5) }
    monitoring_of_tree_indicators { rand(0..5) }
    availability_of_data_on_tree_indicators { rand(0..5) }
    monitoring_duration { rand(0..5) }
    monitoring_frequency { rand(0..5) }
    verification { rand(0..5) }
    tree_species_selection { rand(0..5) }
    tree_seed_source_restrictions { rand(0..5) }
    addressing_potential_negative_ecological_consequences { rand(0..5) }
    monitoring_biodiversity_environmental_indicators { rand(0..5) }
    local_community_involvement { rand(0..5) }
    addressing_potential_social_negative_consequences { rand(0..5) }
    monitoring_of_benefits_to_locals { rand(0..5) }
    availability_of_data_on_benefits_to_locals { rand(0..5) }
    monitoring_of_gender_and_beneficiary_demographics { rand(0..5) }
    availability_of_gender_and_beneficiary_demographics { rand(0..5) }
    primary_funding_sources { rand(0..5) }
    parties_responsible_for_maintenance_identified { rand(0..5) }
    disclosure_of_cost_split_to_local_projects { rand(0..5) }

    trait :with_high_impact do
      estimated_impact_trees { rand(50000..500000) }
      estimated_impact_hectares { rand(500.0..5000.0).round(1) }
      permanence { rand(4.0..5.0).round(1) }
      ecological { rand(4.0..5.0).round(1) }
      social { rand(4.0..5.0).round(1) }
      financial { rand(4.0..5.0).round(1) }
    end

    trait :ngo do
      org_type { 'ngo' }
    end

    trait :with_carbon_credits do
      carbon_credits { true }
    end
  end
end 