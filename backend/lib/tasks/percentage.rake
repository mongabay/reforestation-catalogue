namespace :percentage do
  desc "Sets percentage for all Projects"
  task set_all: :environment do
    Project.all.each do |project|
      project.update_percentage_for_all_categories
    end
  end
end