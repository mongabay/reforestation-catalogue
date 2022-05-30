module Api
  class Searcher
    attr_accessor :search

    def initialize(projects, search)
      @projects = projects
      @search = search
    end

    def call
      if @search.present?
        return @projects = @projects.where("project_name ilike ?", "%#{@search}%").
          or(@projects.where("lead_organization ilike ?", "%#{@search}%")).
          or(@projects.where("name_org_donor ilike ?", "%#{@search}%")).
          or(@projects.where("country ilike ?", "%#{@search}%")).
          or(@projects.where("partner_name ilike ?", "%#{@search}%"))
      end

      @projects
    end
  end
end