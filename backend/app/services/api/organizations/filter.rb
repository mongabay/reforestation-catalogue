module Api
  module Organizations
    class Filter
      attr_accessor :organizations, :filters_to_apply

      def initialize(organizations, filters_to_apply)
        @organizations = organizations 
        @filters_to_apply = filters_to_apply
      end

      def call
        # Basic text filters
        if @filters_to_apply['name'].present?
          @organizations = @organizations.where("name ILIKE ?", "%#{@filters_to_apply['name']}%")
        end

        if @filters_to_apply['country_hq'].present?
          @organizations = @organizations.where("country_hq ILIKE ?", "%#{@filters_to_apply['country_hq']}%")
        end

        if @filters_to_apply['geography'].present?
          @organizations = @organizations.where("geography ILIKE ?", "%#{@filters_to_apply['geography']}%")
        end

        if @filters_to_apply['org_type'].present?
          # Handle both string and numeric org_type values
          org_type_value = @filters_to_apply['org_type']
          if org_type_value.is_a?(String) && org_type_value.match?(/^\d+$/)
            @organizations = @organizations.where(org_type: org_type_value.to_i)
          else
            @organizations = @organizations.where(org_type: org_type_value)
          end
        end

        # Numeric filters
        if @filters_to_apply['year_founded'].present?
          @organizations = @organizations.where(year_founded: @filters_to_apply['year_founded'].to_f)
        end

        if @filters_to_apply['estimated_impact_trees'].present?
          @organizations = @organizations.where('estimated_impact_trees >= ?', @filters_to_apply['estimated_impact_trees'].to_f)
        end

        if @filters_to_apply['estimated_impact_hectares'].present?
          @organizations = @organizations.where('estimated_impact_hectares >= ?', @filters_to_apply['estimated_impact_hectares'].to_f)
        end

        # Score filters (permanence, ecological, social, financial)
        if @filters_to_apply['permanence'].present?
          @organizations = @organizations.where('permanence >= ?', @filters_to_apply['permanence'].to_f)
        end

        if @filters_to_apply['ecological'].present?
          @organizations = @organizations.where('ecological >= ?', @filters_to_apply['ecological'].to_f)
        end

        if @filters_to_apply['social'].present?
          @organizations = @organizations.where('social >= ?', @filters_to_apply['social'].to_f)
        end

        if @filters_to_apply['financial'].present?
          @organizations = @organizations.where('financial >= ?', @filters_to_apply['financial'].to_f)
        end

        # Boolean filters
        if @filters_to_apply['carbon_credits'].present?
          @organizations = @organizations.where(carbon_credits: @filters_to_apply['carbon_credits'])
        end

        if @filters_to_apply['public_facing_spatial_results'].present?
          @organizations = @organizations.where(public_facing_spatial_results: @filters_to_apply['public_facing_spatial_results'])
        end

        # Array field filters
        if @filters_to_apply['goals_class'].present?
          @organizations = @organizations.where("goals_class && ?", "{#{@filters_to_apply['goals_class']}}")
        end

        if @filters_to_apply['tree_growing_methods'].present?
          @organizations = @organizations.where("tree_growing_methods && ?", "{#{@filters_to_apply['tree_growing_methods']}}")
        end

        if @filters_to_apply['funding'].present?
          @organizations = @organizations.where("funding && ?", "{#{@filters_to_apply['funding']}}")
        end

        if @filters_to_apply['applied_standards'].present?
          @organizations = @organizations.where("applied_standards && ?", "{#{@filters_to_apply['applied_standards']}}")
        end

        return @organizations
      end
    end
  end
end 