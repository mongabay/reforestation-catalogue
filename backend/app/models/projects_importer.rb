class ProjectsImporter
  
  # @param file_path [String] absolute or relative to root
  def import_from_json(file_path)
    file = File.read(file_path)
    data_hash = JSON.parse!(file)

    data_hash.each do |project_data|
      new_project = Project.new()
      project_data.each do |key, value|
        sanitized_key = key.to_s.underscore.to_sym
        new_project[sanitized_key] = value
      end
      new_project.save!
      puts new_project.id      
    end
  end
end

class String
  def underscore
    self.gsub(/::/, '/').
    gsub(/([A-Z]+)([A-Z][a-z])/,'\1_\2').
    gsub(/([a-z\d])([A-Z])/,'\1_\2').
    tr("-", "_").
    downcase
  end
end
