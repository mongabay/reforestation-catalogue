module Api
  class Filter
    attr_accessor :projects, :filters_to_apply

    def initialize(projects, filters_to_apply)
      @projects = projects 
      @filters_to_apply = filters_to_apply
    end

    def call
      if @filters_to_apply['start_year'].present? and @filters_to_apply['start_year'].to_i > 1980
        @projects = @projects.where('start_year >= ?', @filters_to_apply['start_year'].to_i)
      end
      if @filters_to_apply['end_year'].present?
        if  @filters_to_apply['end_year'] == nil || @filters_to_apply['end_year'] == 'nil'
          @projects = @projects.where(end_year: nil)
        else
          @filters_to_apply['end_year'] = Project::END_YEAR_SPECIAL_VALUES['ongoing'] if @filters_to_apply['end_year'] == 'ongoing'
          if @filters_to_apply['end_year'].to_i <= Date.current.year
            @projects = @projects.where('end_year <= ?', @filters_to_apply['end_year'].to_i)
          end
        end
      end
      if @filters_to_apply['size_of_project_ha'].present? and @filters_to_apply['size_of_project_ha'].to_i >= 0
        @projects = @projects.where('size_of_project_ha >= ?', @filters_to_apply['size_of_project_ha'].to_i)
      end
      if @filters_to_apply['has_explicit_location'].present?
        @projects = @projects.where(has_explicit_location: @filters_to_apply['has_explicit_location'])
      end
      if @filters_to_apply['fire_prevention'].present?
        @projects = @projects.where(fire_prevention: @filters_to_apply['fire_prevention'])
      end
      if @filters_to_apply['addresses_known_threats'].present?
        @projects = @projects.where(addresses_known_threats: @filters_to_apply['addresses_known_threats'])
      end
      if @filters_to_apply['discloses_species_used'].present?
        @projects = @projects.where(discloses_species_used: @filters_to_apply['discloses_species_used'])
      end
      if @filters_to_apply['identify_deforestation_driver'].present?
        @projects = @projects.where(identify_deforestation_driver: @filters_to_apply['identify_deforestation_driver'])
      end
      if @filters_to_apply['local_seedling_nurseries'].present?
        @projects = @projects.where(local_seedling_nurseries: @filters_to_apply['local_seedling_nurseries'])
      end
      if @filters_to_apply['follow_up_disclosed'].present?
        @projects = @projects.where(follow_up_disclosed: @filters_to_apply['follow_up_disclosed'])
      end
      if @filters_to_apply['scientific_research_associated_with_project'].present?
        @projects = @projects.where(scientific_research_associated_with_project: @filters_to_apply['scientific_research_associated_with_project'])
      end
      if @filters_to_apply['has_gender_component'].present?
        @projects = @projects.where(has_gender_component: @filters_to_apply['has_gender_component'])
      end
      if @filters_to_apply['forest_type'].present?
        @projects = @projects.where("forest_type && ?", "{#{ @filters_to_apply['forest_type'] }}")
      end
      if @filters_to_apply['financial_model'].present?
        @projects = @projects.where("financial_model && ?", "{#{ @filters_to_apply['financial_model'] }}")
      end
      if @filters_to_apply['who_is_involved'].present?
        @projects = @projects.where("who_is_involved && ?", "{#{ @filters_to_apply['who_is_involved'] }}")
      end
      if @filters_to_apply['organization_type'].present?
        @projects = @projects.where(organization_type: @filters_to_apply['organization_type'].to_i)
      end
      if @filters_to_apply['has_justification_for_approach'].present?
        @projects = @projects.where(has_justification_for_approach: @filters_to_apply['has_justification_for_approach'])
      end
      if @filters_to_apply['highlighted'].present?
        @projects = @projects.where(highlighted: @filters_to_apply['highlighted'])
      end

      return @projects
    end
  end
end