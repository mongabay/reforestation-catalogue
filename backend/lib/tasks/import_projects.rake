namespace :import do
  desc "Imports data from files in local file system."
  task projects: :environment do
    ProjectsImporter.new().import_from_json('mongabay-data.json')
  end
end