namespace :percentage do
  desc "Sets percentage for all Projects"
  task set_all: :environment do
    Project.all.each do |project|
      project.get_project_categories_percentage.each do |k,v|
        category = Category.where(slug: k).first
        ProjectCategory.create(project: project, category: category, percentage: v)
      end
      puts ProjectCategory.all.count
    end
  end
end