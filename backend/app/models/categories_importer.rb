class CategoriesImporter
  
  # @param file_path [String] absolute or relative to root
  def import_from_json(file_path)
    file = File.read(file_path)
    data_hash = JSON.parse!(file)

    data_hash.each do |category_data|
      puts category_data["label"]
      new_category = Category.new()
      new_category.slug = category_data["id"].downcase
      new_category.label = category_data["label"]
      new_category.form_description = category_data["description"]
      new_category.save!
      category_data["fields"].each do |field|
        puts field["label"]
        new_filter = Filter.new
        new_filter.slug = field["id"].underscore
        new_filter.label = field["label"]
        new_filter.data_type = field["type"].underscore
        new_filter.query_mode = field["mode"].underscore
        new_filter.hide = field["hidden"]
        new_filter.category = new_category
        new_filter.save!
      end
      puts new_category.id      
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
