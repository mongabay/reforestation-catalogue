class Api::V1::EnumsController < ApplicationController
  def index
    
    enums_collection = []

    Project::PROJECT_ENUMS.each do |project_enum|
      enum_object = {}
      enum_object['type'] = 'enum'
      enum_object['name'] = project_enum
      enum_object['data'] = Project.send(project_enum.pluralize)

      enums_collection.push(enum_object)
    end

    end_year_special_value = {}
    end_year_special_value['type'] = 'special value'
    end_year_special_value['name'] = 'end year special value'
    end_year_special_value['data'] = Project::END_YEAR_SPECIAL_VALUES

    enums_collection.push(end_year_special_value)

    countries_special_value = {}
    countries_special_value['type'] = 'special value'
    countries_special_value['name'] = 'countries special value'
    countries_special_value['data'] = Project::COUNTRIES_SPECIAL_VALUES

    enums_collection.push(countries_special_value)
    

    
    render json: enums_collection.to_json
  end
end
