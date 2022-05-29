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
      if @filters_to_apply['end_year'].present? and @filters_to_apply['end_year'].to_i <= 2022
        @projects = @projects.where('end_year <= ?', @filters_to_apply['end_year'].to_i)
      end

      return @projects
    end
  end
end