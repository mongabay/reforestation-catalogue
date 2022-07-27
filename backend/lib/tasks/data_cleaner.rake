namespace :data_clean do
  desc "Cleans enums"
  task run: :environment do
    columns = {}
    workbook = RubyXL::Parser.parse("public/reforestation_app_data_cleaning.xlsx")
    workbook.worksheets.each do |worksheet|
      column_name = worksheet.sheet_name.downcase.gsub(" ", "_").strip
      columns[column_name] = []

      col = 0
      row = 1

      until worksheet.sheet_data[row].nil? or worksheet.sheet_data[row][col].nil?
        new_hash = {}
        col = 0
        new_hash[worksheet.sheet_data[0][col].value.downcase.strip] = worksheet.sheet_data[row][col].value.strip
        col = 1
        new_hash[worksheet.sheet_data[0][col].value.downcase.strip] = worksheet.sheet_data[row][col].value.strip
        columns[column_name].push(new_hash)
        row += 1
      end
    end

    # TO DO:
    # - handle when values in the NEW column are "NULL"
    # - add to respective enums those values from NEW that
    #   are not yet defined as available
    #
    Project.all.each do |project|
      columns.each do |key, values|
        puts key
        if project.send("#{key}").class == String
          values.each do |value|
            if project.send("#{key}") == value['original']
              project.send("#{key}=", value['new'])
              #project.save!
            end
          end
        else
          values.each do |value|
            if project.send("#{key}").include?(value.values.first)
              new_values = project.send("#{key}")
              new_values.delete(value.values.first)
              new_values.push(value.values.second)
              #project.send("#{key}=", new_values.uniq)
              #project.save!
            end
          end
        end
      end
    end
  end
end