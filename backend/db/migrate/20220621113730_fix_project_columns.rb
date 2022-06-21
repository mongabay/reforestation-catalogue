class FixProjectColumns < ActiveRecord::Migration[7.0]
  def up
    integer_columns.each do |col_name|
      col_props = Project.columns.find { |c| c.name == col_name }
      rename_column :projects, col_name, "#{col_name}_tmp"
      add_column :projects, col_name, :integer
      if col_props.sql_type == 'integer'
        execute "UPDATE projects SET #{col_name} = #{col_name}_tmp"
      else
        execute "UPDATE projects SET #{col_name} = #{col_name}_tmp::INT"
      end
    end

    integer_array_columns.each do |col_name|
      col_props = Project.columns.find { |c| c.name == col_name }
      rename_column :projects, col_name, "#{col_name}_tmp"
      add_column :projects, col_name, :integer, default: [], array: true
      if col_props.sql_type == 'integer'
        execute "UPDATE projects SET #{col_name} = #{col_name}_tmp"
      else
        execute "UPDATE projects SET #{col_name} = STRING_TO_ARRAY(REGEXP_REPLACE(#{col_name}_tmp, '\\[(.*)\\]', '\\1'), ',')::INT[]"
      end
    end
  end

  def down
    # this is in case we need to roll back
    (integer_columns + integer_array_columns).each do |col_name|
      remove_column :projects, col_name
      rename_column :projects, "#{col_name}_tmp", col_name
    end
  end
end

def integer_columns
  ['organization_type']
end

def integer_array_columns
  [
    'who_is_involved',
    'forest_type',
    'primary_objective_purpose',
    'approach',
    'financial_model',
    'type_of_follow_up'
  ]
end
