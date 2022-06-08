class ProjectsImporter
  
  # @param file_path [String] absolute or relative to root
  def import_from_json(file_path)
    Project.delete_all

    file = File.read(file_path)
    data_hash = JSON.parse!(file)

    data_hash.each do |project_data|
      new_project = Project.new()
      project_data.each do |key, value|
        sanitized_key = key.to_s.underscore
        next if sanitized_key == 'id'

        if sanitized_key == 'end_year'
          value = Project::END_YEAR_SPECIAL_VALUES[value] if Project::END_YEAR_SPECIAL_VALUES.keys.include?(value)
        end
        new_project.send("#{sanitized_key}=", value)
      end
      new_project.approved = true
      new_project.save!      
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
