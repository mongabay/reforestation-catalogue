module Api
  module Organizations
    class Sorter
      attr_accessor :sort_by, :order, :organizations

      def initialize(sort_by, order)
        @sort_by = sort_by
        @order = order
      end

      def call
        if @sort_by.present?
          case @sort_by.downcase
          when "permanence"
            sort_by_field("permanence")
          when "ecological"
            sort_by_field("ecological")
          when "social"
            sort_by_field("social")
          when "financial"
            sort_by_field("financial")
          when "name"
            sort_by_field("name")
          when "year_founded"
            sort_by_field("year_founded")
          when "estimated_impact_trees"
            sort_by_field("estimated_impact_trees")
          when "estimated_impact_hectares"
            sort_by_field("estimated_impact_hectares")
          when "country_hq"
            sort_by_field("country_hq")
          when "org_type"
            sort_by_field("org_type")
          else
            # Default to sorting by name if unknown sort field
            sort_by_field("name")
          end
        else
          # Default sorting by name ascending
          Organization.order(:name)
        end
      end

      private

      def sort_by_field(field)
        if @order&.downcase == "desc"
          Organization.order(field => :desc)
        else
          Organization.order(field => :asc)
        end
      end
    end
  end
end
