namespace :fixup do
  desc "Reduces the number of enums by merging them accoring to a new mapping"
  task enums: [:primary_objective_purpose, :type_of_follow_up, :financial_model, :organization_type] do
  end

  def generate_mapping(enum_name)
    old_mapping = YAML.load(File.read("db/fixup_enums/#{enum_name}_old_mapping.yml"))
    old_mapping_lc = Hash[old_mapping.map { |k, v| [k.downcase, v] }]
    max_code = old_mapping.values.max
    transformation = YAML.load(File.read("db/fixup_enums/#{enum_name}_transformation.yml"))
    transformation_lc = Hash[transformation.map { |k, v| [k.downcase, v]}]
    new_mapping = {}
    code_mapping = {}
    old_mapping.each do |old_name, old_code|
      old_name_lc = old_name.downcase
      new_name = transformation_lc[old_name_lc]
      if new_name.present?
        new_code = old_mapping_lc[new_name.downcase]
        pp [new_name.downcase, new_code]
        new_code ||= (max_code += 1)
        old_mapping_lc[new_name.downcase] = new_code
      else
        new_code = nil
      end
      code_mapping[old_code] = new_code if old_code != new_code
      new_mapping[new_name] = new_code if new_name.present?
    end
    File.open("db/fixup_enums/#{enum_name}_new_mapping.yml", 'w') { |f| f << new_mapping.to_yaml }
    File.open("db/fixup_enums/#{enum_name}_code_mapping.yml", 'w') { |f| f << code_mapping.to_yaml }
  end

  def update_values_in_db(enum_name, array: false)
    code_mapping = YAML.load(File.read("db/fixup_enums/#{enum_name}_code_mapping.yml"))
    Project.all.each do |p|
      old_value =
        if array
          p.send(:read_attribute_before_type_cast, enum_name).gsub(/[{}]/, '').split(',').map(&:to_i)
        else
          p.send(:read_attribute_before_type_cast, enum_name)
        end
      new_value =
        if array
          old_value.map { |v| code_mapping[v] }.compact
        else
          code_mapping[old_value]
        end
      pp "updating #{enum_name} from #{old_value} to #{new_value}"
      p.update_column(enum_name, new_value)
    end
  end

  task primary_objective_purpose: :environment do
    generate_mapping('primary_objective_purpose')
    update_values_in_db('primary_objective_purpose', array: true)
  end

  task type_of_follow_up: :environment do
    generate_mapping('type_of_follow_up')
    update_values_in_db('type_of_follow_up', array: true)
  end

  task financial_model: :environment do
    generate_mapping('financial_model')
    update_values_in_db('financial_model', array: true)
  end

  task organization_type: :environment do
    generate_mapping('organization_type')
    update_values_in_db('organization_type', array: false)
  end
end
