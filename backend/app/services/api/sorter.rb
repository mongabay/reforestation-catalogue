module Api
  class Sorter
    attr_accessor :sort_by, :order, :category, :projects

    def initialize(sort_by, order)
      @sort_by = sort_by
      @order = order
    end

    def call
      if @sort_by.present?
        @category = Category.where(slug: "#{@sort_by}_category").first
        exit unless @category.present?
  
        if @order&.downcase =='asc'
          @projects = @category.projects_asc
        else
          @projects = @category.projects_desc
        end
      else
        @category = Category.where(slug: "context_category").first
        
        return @projects = @category.projects_desc if @category.present?
        @projects = Project.all
      end
    end
  end
end