class ProjectSerializer
  include JSONAPI::Serializer
  attributes :project_number,                                             
  :project_name,                                               
  :lead_organization,                                          
  :organization_type,                                          
  :who_is_involved,                                            
  :project_org_url,                                            
  :has_project_partners,                                       
  :partner_name,                                               
  :start_year,                                                 
  :end_year,                                                   
  :country,                                                    
  :country_code,                                               
  :size_of_project_ha,                                         
  :trees_planted_number,                                       
  :has_explicit_location,
  :forest_type,
  :primary_objective_purpose,
  :approach,
  :identify_deforestation_driver,
  :fire_prevention,
  :has_justification_for_approach,
  :addresses_known_threats,
  :discloses_species_used,
  :use_native_species,
  :use_exotic_species,
  :local_seedling_nurseries,
  :financial_model,
  :name_org_donor,
  :has_public_reports,
  :follow_up_disclosed,
  :type_of_follow_up,
  :has_community_involvement,
  :has_gender_component,
  :scientific_research_associated_with_project,
  :news_articles_associated_with_project,
  :comment

  attribute :percentages do |object|
    "#{object.get_project_categories_percentage}"
  end
end
