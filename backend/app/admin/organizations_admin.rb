Trestle.resource(:organizations) do
  menu do
    item :organizations, icon: "fa fa-building"
  end

  # Use custom controller for CSV import functionality
  controller do
    def import_csv
      if request.post?
        if params[:csv_file].present?
          file = params[:csv_file]

          # Create a temporary file
          temp_file = Tempfile.new(["organizations_import", ".csv"])
          temp_file.write(file.read)
          temp_file.close

          # Import the CSV
          importer = OrganizationsCsvImporter.new(temp_file.path)
          success = importer.import

          # Clean up temp file
          temp_file.unlink

          if success
            flash[:message] = "Successfully imported #{importer.imported_count} organizations. #{importer.skipped_count} rows were skipped."
            flash[:error] = importer.errors.join("<br>").html_safe if importer.errors.any?
          else
            flash[:error] = "Import failed: #{importer.errors.join(", ")}"
          end
        else
          flash[:error] = "Please select a CSV file to upload."
        end

        redirect_to admin_organizations_path
      else
        render "admin/organizations/import_csv"
      end
    end
  end

  # Customize the table columns shown on the index view
  table do
    column :name
    column :org_type
    column :year_founded
    column :country_hq
    column :geography
    column :estimated_impact_trees do |org|
      number_with_delimiter(org.estimated_impact_trees) if org.estimated_impact_trees
    end
    column :estimated_impact_hectares do |org|
      number_with_delimiter(org.estimated_impact_hectares) if org.estimated_impact_hectares
    end
    column :carbon_credits, align: :center
    actions
  end

  # Add import button to the index view
  collection_action :import_csv, method: [:get, :post]

  # Customize the index view to include import button
  index do
    div class: "trestle-index-header" do
      div class: "trestle-index-header-actions" do
        link_to "Import CSV", import_csv_admin_organizations_path, class: "btn btn-primary"
      end
    end

    table
  end

  # Customize the form fields shown on the new/edit views
  form do |organization|
    tab :general do
      text_field :name
      select :org_type, options_for_select([
        ["Nongovernmental organization (NGO)", "Nongovernmental organization (NGO)"],
        ["Community-based organization (CBO)", "Community-based organization (CBO)"],
        ["Private Sector", "Private Sector"],
        ["Intergovernmental organization (IGO)", "Intergovernmental organization (IGO)"],
        ["Government", "Government"],
        ["University / Academic institution", "University / Academic institution"]
      ], organization.org_type), {prompt: "Select organization type"}

      number_field :year_founded
      text_field :country_hq
      text_field :geography
      text_area :primary_organization_url, placeholder: "Primary organization URL"
      text_area :data_sources, placeholder: "Data sources"
    end

    tab :impact_metrics do
      row do
        col { number_field :permanence, step: 0.1, label: "Permanence Score" }
        col { number_field :ecological, step: 0.1, label: "Ecological Score" }
      end
      row do
        col { number_field :social, step: 0.1, label: "Social Score" }
        col { number_field :financial, step: 0.1, label: "Financial Score" }
      end

      row do
        col { number_field :estimated_impact_trees, label: "Estimated Impact (Trees)" }
        col { number_field :estimated_impact_hectares, step: 0.1, label: "Estimated Impact (Hectares)" }
      end

      number_field :support_for_landholders, step: 0.1, label: "Support for Landholders"
      number_field :funding_duration_for_maintenance_and_stewardship, step: 0.1, label: "Funding Duration for Maintenance & Stewardship"
    end

    tab :programs_and_methods do
      text_area :program_names, placeholder: "Program names (one per line)", rows: 4,
        help: "Enter each program name on a separate line"
      text_area :ribbons, placeholder: "Ribbons/Awards (one per line)", rows: 3,
        help: "Enter each ribbon or award on a separate line"
      text_area :goals_class, placeholder: "Goals classification (one per line)", rows: 4,
        help: "Enter each goal classification on a separate line"
      text_area :targets, placeholder: "Targets (one per line)", rows: 4,
        help: "Enter each target on a separate line"
      text_area :tree_growing_methods, placeholder: "Tree growing methods (one per line)", rows: 4,
        help: "Enter each method on a separate line"
      text_area :geographylist, placeholder: "Geography list (one per line)", rows: 4,
        help: "Enter each geographic area on a separate line"
    end

    tab :funding_and_support do
      text_area :funding, placeholder: "Funding sources (one per line)", rows: 4,
        help: "Enter each funding source on a separate line"
      text_area :forms_of_intermediary_support, placeholder: "Forms of intermediary support (one per line)", rows: 4,
        help: "Enter each form of support on a separate line"

      check_box :carbon_credits, label: "Offers Carbon Credits"
      text_area :applied_standards, placeholder: "Applied standards (one per line)", rows: 3,
        help: "Enter each standard on a separate line"

      check_box :public_facing_spatial_results, label: "Has Public Facing Spatial Results"
      text_area :dashboards_and_apps, placeholder: "Dashboards and apps (one per line)", rows: 3,
        help: "Enter each dashboard or app on a separate line"
    end

    tab :project_standards do
      number_field :project_selection_standards, label: "Project Selection Standards"
      number_field :addressing_drivers_of_deforestation, label: "Addressing Drivers of Deforestation"
      number_field :land_tenure, label: "Land Tenure"
      number_field :maintenance_duration, label: "Maintenance Duration"
      number_field :management_plans, label: "Management Plans"
      number_field :monitoring_protocols, label: "Monitoring Protocols"
      number_field :monitoring_of_tree_indicators, label: "Monitoring of Tree Indicators"
      number_field :availability_of_data_on_tree_indicators, label: "Availability of Data on Tree Indicators"
      number_field :monitoring_duration, label: "Monitoring Duration"
      number_field :monitoring_frequency, label: "Monitoring Frequency"
      number_field :verification, label: "Verification"
    end

    tab :ecological_standards do
      number_field :tree_species_selection, label: "Tree Species Selection"
      number_field :tree_seed_source_restrictions, label: "Tree Seed Source Restrictions"
      number_field :addressing_potential_negative_ecological_consequences, label: "Addressing Potential Negative Ecological Consequences"
      number_field :monitoring_biodiversity_environmental_indicators, label: "Monitoring Biodiversity Environmental Indicators"
    end

    tab :social_standards do
      number_field :local_community_involvement, label: "Local Community Involvement"
      number_field :addressing_potential_social_negative_consequences, label: "Addressing Potential Social Negative Consequences"
      number_field :monitoring_of_benefits_to_locals, label: "Monitoring of Benefits to Locals"
      number_field :availability_of_data_on_benefits_to_locals, label: "Availability of Data on Benefits to Locals"
      number_field :monitoring_of_gender_and_beneficiary_demographics, label: "Monitoring of Gender and Beneficiary Demographics"
      number_field :availability_of_gender_and_beneficiary_demographics, label: "Availability of Gender and Beneficiary Demographics"
    end

    tab :financial_standards do
      number_field :primary_funding_sources, label: "Primary Funding Sources"
      number_field :parties_responsible_for_maintenance_identified, label: "Parties Responsible for Maintenance Identified"
      number_field :disclosure_of_cost_split_to_local_projects, label: "Disclosure of Cost Split to Local Projects"
    end
  end

  # Handle array fields that come from text areas
  update_instance do |instance, attrs|
    array_fields = [:ribbons, :program_names, :goals_class, :targets, :tree_growing_methods,
      :geographylist, :funding, :forms_of_intermediary_support, :applied_standards,
      :dashboards_and_apps]

    array_fields.each do |field|
      if attrs[field].present?
        attrs[field] = attrs[field].split("\n").map(&:strip).reject(&:blank?)
      end
    end

    instance.assign_attributes(attrs)
  end

  build_instance do |attrs|
    array_fields = [:ribbons, :program_names, :goals_class, :targets, :tree_growing_methods,
      :geographylist, :funding, :forms_of_intermediary_support, :applied_standards,
      :dashboards_and_apps]

    array_fields.each do |field|
      if attrs[field].present?
        attrs[field] = attrs[field].split("\n").map(&:strip).reject(&:blank?)
      end
    end

    Organization.new(attrs)
  end

  # Strong parameters
  params do |params|
    params.require(:organization).permit(
      :name, :permanence, :ecological, :social, :financial, :primary_organization_url,
      :data_sources, :org_type, :year_founded, :country_hq, :estimated_impact_trees,
      :estimated_impact_hectares, :geography, :carbon_credits, :public_facing_spatial_results,
      :project_selection_standards, :addressing_drivers_of_deforestation, :land_tenure,
      :maintenance_duration, :management_plans, :monitoring_protocols, :monitoring_of_tree_indicators,
      :availability_of_data_on_tree_indicators, :monitoring_duration, :monitoring_frequency,
      :verification, :tree_species_selection, :tree_seed_source_restrictions,
      :addressing_potential_negative_ecological_consequences, :monitoring_biodiversity_environmental_indicators,
      :local_community_involvement, :addressing_potential_social_negative_consequences,
      :support_for_landholders, :monitoring_of_benefits_to_locals, :availability_of_data_on_benefits_to_locals,
      :monitoring_of_gender_and_beneficiary_demographics, :availability_of_gender_and_beneficiary_demographics,
      :primary_funding_sources, :funding_duration_for_maintenance_and_stewardship,
      :parties_responsible_for_maintenance_identified, :disclosure_of_cost_split_to_local_projects,
      :ribbons, :program_names, :goals_class, :targets, :tree_growing_methods, :geographylist,
      :funding, :forms_of_intermediary_support, :applied_standards, :dashboards_and_apps
    )
  end
end
