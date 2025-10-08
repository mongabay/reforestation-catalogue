module Api
  class Sorter
    attr_accessor :sort_by, :order, :category, :projects

    def initialize(sort_by, order)
      @sort_by = sort_by
      @order = order
    end

    def call
      if @sort_by.present?
        @category = Category.where(slug: "#{@sort_by}").first
        exit unless @category.present?
  
        if @order&.downcase =='asc'
          return @projects = @category.projects_asc.where(approved: true)
        else
          return @projects = @category.projects_desc.where(approved: true)
        end
      else
        @category = Category.where(slug: "context").first
        
        return @projects = @category.projects_desc.where(approved: true) if @category.present?
        @projects = Project.approved
      end
    end
  end
end