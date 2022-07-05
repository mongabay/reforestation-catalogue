class ProjectSerializer
  include JSONAPI::Serializer
  attributes :project_number,                                             
  :project_name,                                               
  :lead_organization,                                        
  :who_is_involved,                                            
  :project_org_url,                                            
  :has_project_partners,                                       
  :partner_name,                                                    
  :country,                                                    
  :country_code,                                               
  :size_of_project_ha,                                         
  :trees_planted_number,                                       
  :has_explicit_location,
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
  :has_community_involvement,
  :has_gender_component,
  :scientific_research_associated_with_project,
  :news_articles_associated_with_project,
  :comment,
  :approved,
  :highlighted,                                              
  :start_year ,
  :end_year                                            

  # attribute :end_year do |object|
  #   if object.end_year == Project::END_YEAR_SPECIAL_VALUES['ongoing']
  #     'ongoing'
  #   else
  #     object.end_year
  #   end
  # end

  attribute :project_links_attributes do |object|
    object.project_links
  end
  attribute :percentages do |object|
    object.get_project_categories_percentage
  end
  attribute :organization_type do |object|
    object.organization_type_before_type_cast
  end
  attribute :forest_type do |object|
    object.forest_type.map { |key| Project.forest_types[key] }
  end
  attribute :type_of_follow_up do |object|
    object.type_of_follow_up.map { |key| Project.type_of_follow_ups[key] }
  end
  attribute :who_is_involved do |object|
    object.who_is_involved.map { |key| Project.who_is_involveds[key] }
  end
  attribute :primary_objective_purpose do |object|
    object.primary_objective_purpose.map { |key| Project.primary_objective_purposes[key] }
  end
  attribute :approach do |object|
    object.approach.map { |key| Project.approaches[key] }
  end
  attribute :financial_model do |object|
    object.financial_model.map { |key| Project.financial_models[key] }
  end
end
