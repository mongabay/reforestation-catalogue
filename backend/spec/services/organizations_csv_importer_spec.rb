require "rails_helper"

RSpec.describe OrganizationsCsvImporter do
  let(:csv_content) do
    <<~CSV
      org,Ribbons,PERMANENCE,ECOLOGICAL,SOCIAL,FINANCIAL,Program_Names,Primary_Organization_URL,Data_Sources,Org_Type,Year_Founded,Country_HQ,Goals_Class,Targets,Tree_Growing_Methods,Estimated_Impact_TREES,Estimated_Impact_HECTARES,Geography,GeographyList,Funding,Forms_of_Intermediary_Support,Carbon_Credits?,Applied_Standards,Public-facing_Spatial_Results,Dashboards_and_Apps,Project_Selection_Standards,Addressing_Drivers_of_Deforestation,Land_Tenure,Maintenance_Duration,Management_Plans,Monitoring_Protocols,Monitoring_of_Tree_Indicators,Availability_of_Data_on_Tree_Indicators,Monitoring_Duration,Monitoring_Frequency,Verification,Tree_Species_Selection,Tree/Seed_Source_Restrictions,Addressing_Potential_Negative_Ecological_Consequences,Monitoring_Biodiversity/Environmental_Indicators,Local_Community_Involvement,Addressing_Potential_Social_Negative_Consequences,Support_for_Landholders,Monitoring_of_Benefits_to_Locals,Availability_of_Data_on_Benefits_to_Locals,Monitoring_of_Gender_and_Beneficiary_Demographics,Availability_of_Gender_and_Beneficiary_Demographics,Primary_Funding_Sources,Funding_Duration_for_Maintenance_&_Stewardship,Parties_Responsible_For_Maintenance_Identified,Disclosure_of_Cost-split_to_Local_Projects
      8 Billion Trees,,0.4125,0.75,0.333333333,0.208333333,,https://8billiontrees.com/,Website,social enterprise,2018,USA,"biodiversity/conservation, climate/carbon, people/livelihoods","""Founder Jon Chambers was inspired by activism groups, but saw the opportunity to do something even bigger: plant and save 8 billion trees."" (tree target)",seedling planting,14385101,,in 4-10 countries,"Australia, Nepal, and Madagascar",,"Start-up Financing, Capacitation/Advice, Direct Management",TRUE,,FALSE,,2,3,0,0,1,1,2,0,1,0,1,2,2,1,1,2,0,1,1,0,1,0,1,0,1,0
    CSV
  end

  let(:temp_file) do
    file = Tempfile.new(["test_import", ".csv"])
    file.write(csv_content)
    file.close
    file
  end

  after do
    temp_file.unlink if temp_file
  end

  describe "#import" do
    it "imports organizations from CSV" do
      importer = OrganizationsCsvImporter.new(temp_file.path)
      
      expect { importer.import }.to change(Organization, :count).by(1)
      
      expect(importer.imported_count).to eq(1)
      expect(importer.skipped_count).to eq(0)
      expect(importer.errors).to be_empty
    end

    it "creates organization with correct attributes" do
      importer = OrganizationsCsvImporter.new(temp_file.path)
      importer.import
      
      organization = Organization.last
      expect(organization.name).to eq("8 Billion Trees")
      expect(organization.org_type).to eq("Private Sector")
      expect(organization.year_founded).to eq(2018.0)
      expect(organization.country_hq).to eq("USA")
      expect(organization.permanence).to eq(0.4125)
      expect(organization.ecological).to eq(0.75)
      expect(organization.social).to eq(0.333333333)
      expect(organization.financial).to eq(0.208333333)
      expect(organization.estimated_impact_trees).to eq(14385101.0)
      expect(organization.carbon_credits).to be true
      expect(organization.public_facing_spatial_results).to be false
      expect(organization.goals_class).to eq(["biodiversity/conservation", "climate/carbon", "people/livelihoods"])
      expect(organization.tree_growing_methods).to eq(["seedling planting"])
      expect(organization.geographylist).to eq(["Australia", "Nepal", "and Madagascar"])
    end

    it "handles missing file gracefully" do
      importer = OrganizationsCsvImporter.new("nonexistent_file.csv")
      expect(importer.import).to be false
    end

    it "handles invalid CSV data" do
      invalid_csv = "invalid,headers\ninvalid,data"
      temp_invalid_file = Tempfile.new(["invalid", ".csv"])
      temp_invalid_file.write(invalid_csv)
      temp_invalid_file.close
      
      importer = OrganizationsCsvImporter.new(temp_invalid_file.path)
      importer.import
      
      expect(importer.imported_count).to eq(0)
      expect(importer.skipped_count).to eq(1)
      expect(importer.errors).not_to be_empty
      
      temp_invalid_file.unlink
    end
  end

  describe "#parse_array_field" do
    let(:importer) { OrganizationsCsvImporter.new(temp_file.path) }

    it "handles comma-separated values" do
      result = importer.send(:parse_array_field, "value1,value2,value3")
      expect(result).to eq(["value1", "value2", "value3"])
    end

    it "handles newline-separated values" do
      result = importer.send(:parse_array_field, "value1\nvalue2\nvalue3")
      expect(result).to eq(["value1", "value2", "value3"])
    end

    it "handles empty values" do
      result = importer.send(:parse_array_field, "")
      expect(result).to eq([])
    end

    it "handles nil values" do
      result = importer.send(:parse_array_field, nil)
      expect(result).to eq([])
    end
  end

  describe "#map_org_type" do
    let(:importer) { OrganizationsCsvImporter.new(temp_file.path) }

    it "maps social enterprise to Private Sector" do
      result = importer.send(:map_org_type, "social enterprise")
      expect(result).to eq("Private Sector")
    end

    it "maps NGO to Nongovernmental organization (NGO)" do
      result = importer.send(:map_org_type, "NGO")
      expect(result).to eq("Nongovernmental organization (NGO)")
    end

    it "handles unknown types" do
      result = importer.send(:map_org_type, "unknown type")
      expect(result).to eq("Private Sector")
    end
  end
end