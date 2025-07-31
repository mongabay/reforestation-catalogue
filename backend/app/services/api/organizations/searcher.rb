module Api
  module Organizations
    class Searcher
      attr_accessor :organizations, :search

      def initialize(organizations, search)
        @organizations = organizations
        @search = search
      end

      def call
        if @search.present?
          return @organizations = @organizations.where("name ILIKE ?", "%#{@search}%").
            or(@organizations.where("country_hq ILIKE ?", "%#{@search}%")).
            or(@organizations.where("geography ILIKE ?", "%#{@search}%")).
            or(@organizations.where("data_sources ILIKE ?", "%#{@search}%")).
            or(@organizations.where("primary_organization_url ILIKE ?", "%#{@search}%")).
            or(@organizations.where("program_names && ?", "{#{@search}}")).
            or(@organizations.where("goals_class && ?", "{#{@search}}")).
            or(@organizations.where("targets && ?", "{#{@search}}")).
            or(@organizations.where("tree_growing_methods && ?", "{#{@search}}")).
            or(@organizations.where("funding && ?", "{#{@search}}")).
            or(@organizations.where("applied_standards && ?", "{#{@search}}"))
        end

        @organizations
      end
    end
  end
end