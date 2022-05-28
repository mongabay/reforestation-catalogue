namespace :import do
  desc "Imports data from files in local file system."
  task categories: :environment do
    CategoriesImporter.new().import_from_json('mongabay-categories.json')
  end
end