require "csv"

class OrganizationsCsvImporter
  attr_reader :errors, :imported_count, :skipped_count

  def initialize(file_path)
    @file_path = file_path
    @errors = []
    @imported_count = 0
    @skipped_count = 0
  end

  def import
    return false unless File.exist?(@file_path)

    CSV.foreach(@file_path, headers: true, encoding: "UTF-8") do |row|
      organization_data = map_csv_row_to_organization(row)
      organization = Organization.new(organization_data)

      if organization.save
        @imported_count += 1
      else
        @errors << "Row #{@imported_count + @skipped_count + 1}: #{organization.errors.full_messages.join(", ")}"
        @skipped_count += 1
      end
    rescue => e
      @errors << "Row #{@imported_count + @skipped_count + 1}: #{e.message}"
      @skipped_count += 1
    end

    @errors.empty?
  end

  private

  def map_csv_row_to_organization(row)
    {
      name: row["org"],
      ribbons: parse_array_field(row["Ribbons"]),
      permanence: parse_float(row["PERMANENCE"]),
      ecological: parse_float(row["ECOLOGICAL"]),
      social: parse_float(row["SOCIAL"]),
      financial: parse_float(row["FINANCIAL"]),
      program_names: parse_array_field(row["Program_Names"]),
      primary_organization_url: row["Primary_Organization_URL"],
      data_sources: row["Data_Sources"],
      org_type: map_org_type(row["Org_Type"]),
      year_founded: parse_float(row["Year_Founded"]),
      country_hq: row["Country_HQ"],
      goals_class: parse_array_field(row["Goals_Class"]),
      targets: parse_array_field(row["Targets"]),
      tree_growing_methods: parse_array_field(row["Tree_Growing_Methods"]),
      estimated_impact_trees: parse_float(row["Estimated_Impact_TREES"]),
      estimated_impact_hectares: parse_float(row["Estimated_Impact_HECTARES"]),
      geography: row["Geography"],
      geographylist: parse_array_field(row["GeographyList"]),
      funding: parse_array_field(row["Funding"]),
      forms_of_intermediary_support: parse_array_field(row["Forms_of_Intermediary_Support"]),
      carbon_credits: parse_boolean(row["Carbon_Credits?"]),
      applied_standards: parse_array_field(row["Applied_Standards"]),
      public_facing_spatial_results: parse_boolean(row["Public-facing_Spatial_Results"]),
      dashboards_and_apps: parse_array_field(row["Dashboards_and_Apps"]),
      project_selection_standards: parse_integer(row["Project_Selection_Standards"]),
      addressing_drivers_of_deforestation: parse_integer(row["Addressing_Drivers_of_Deforestation"]),
      land_tenure: parse_integer(row["Land_Tenure"]),
      maintenance_duration: parse_integer(row["Maintenance_Duration"]),
      management_plans: parse_integer(row["Management_Plans"]),
      monitoring_protocols: parse_integer(row["Monitoring_Protocols"]),
      monitoring_of_tree_indicators: parse_integer(row["Monitoring_of_Tree_Indicators"]),
      availability_of_data_on_tree_indicators: parse_integer(row["Availability_of_Data_on_Tree_Indicators"]),
      monitoring_duration: parse_integer(row["Monitoring_Duration"]),
      monitoring_frequency: parse_integer(row["Monitoring_Frequency"]),
      verification: parse_integer(row["Verification"]),
      tree_species_selection: parse_integer(row["Tree_Species_Selection"]),
      tree_seed_source_restrictions: parse_integer(row["Tree/Seed_Source_Restrictions"]),
      addressing_potential_negative_ecological_consequences: parse_integer(row["Addressing_Potential_Negative_Ecological_Consequences"]),
      monitoring_biodiversity_environmental_indicators: parse_integer(row["Monitoring_Biodiversity/Environmental_Indicators"]),
      local_community_involvement: parse_integer(row["Local_Community_Involvement"]),
      addressing_potential_social_negative_consequences: parse_integer(row["Addressing_Potential_Social_Negative_Consequences"]),
      support_for_landholders: parse_float(row["Support_for_Landholders"]),
      monitoring_of_benefits_to_locals: parse_integer(row["Monitoring_of_Benefits_to_Locals"]),
      availability_of_data_on_benefits_to_locals: parse_integer(row["Availability_of_Data_on_Benefits_to_Locals"]),
      monitoring_of_gender_and_beneficiary_demographics: parse_integer(row["Monitoring_of_Gender_and_Beneficiary_Demographics"]),
      availability_of_gender_and_beneficiary_demographics: parse_integer(row["Availability_of_Gender_and_Beneficiary_Demographics"]),
      primary_funding_sources: parse_integer(row["Primary_Funding_Sources"]),
      funding_duration_for_maintenance_and_stewardship: parse_float(row["Funding_Duration_for_Maintenance_&_Stewardship"]),
      parties_responsible_for_maintenance_identified: parse_integer(row["Parties_Responsible_For_Maintenance_Identified"]),
      disclosure_of_cost_split_to_local_projects: parse_integer(row["Disclosure_of_Cost-split_to_Local_Projects"])
    }
  end

  def parse_array_field(value)
    return [] if value.blank?
    # Handle both comma-separated and newline-separated values
    if value.include?("\n")
      value.split("\n").map(&:strip).reject(&:blank?)
    else
      value.split(",").map(&:strip).reject(&:blank?)
    end
  end

  def parse_float(value)
    return nil if value.blank?
    begin
      Float(value)
    rescue
      nil
    end
  end

  def parse_integer(value)
    return nil if value.blank?
    begin
      Integer(value)
    rescue
      nil
    end
  end

  def parse_boolean(value)
    return nil if value.blank?
    value.downcase == "true" || value == "1"
  end

  def map_org_type(value)
    return nil if value.blank?

    case value.downcase
    when "social enterprise"
      "Private Sector"
    when "ngo", "nongovernmental organization"
      "Nongovernmental organization (NGO)"
    when "government"
      "Government"
    when "academic", "university"
      "University / Academic institution"
    when "international organization", "intergovernmental organization"
      "Intergovernmental organization (IGO)"
    when "community organization", "community-based organization"
      "Community-based organization (CBO)"
    when "private sector", "for-profit", "for profit"
      "Private Sector"
    else
      "Private Sector" # default fallback
    end
  end
end
