Trestle.resource(:projects) do
  # https://github.com/TrestleAdmin/trestle/issues/328#issuecomment-720786903
  # For form fields which generate an array of values (e.g. collection check boxes, multiple select fields, etc.), Rails adds a hidden empty input field, as otherwise it becomes impossible to select zero options (since no parameter would be passed).
  # If you don't wish to update your own model setter to reject the blank item, you can define a custom update_instance block.
  #
  update_instance do |instance, attrs|
    Project::PROJECT_ENUMS.each do |project_enum|
      next if project_enum == 'organization_type'
      next unless attrs.keys.include?(project_enum)

      attrs[project_enum.to_sym] = Array(attrs[project_enum.to_sym]).reject(&:blank?)
    end

    instance.assign_attributes(attrs)
  end
  build_instance do |attrs|
    Project::PROJECT_ENUMS.each do |project_enum|
      next if project_enum == 'organization_type'
      next unless attrs.keys.include?(project_enum)

      attrs[project_enum.to_sym] = Array(attrs[project_enum.to_sym]).reject(&:blank?)
    end

    instance = Project.new(attrs)
    instance
  end

  menu do
    item :projects, icon: "fa fa-star"
  end

  scopes do
    scope :all, default: true
    scope :approved, -> { Project.unscoped.where(approved: true) }
    scope :pending, -> { Project.unscoped.where(approved: false) }
    scope :highlighted, -> { Project.unscoped.where(highlighted: true) }
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :project_name
    column :lead_organization
    column :organization_type
    column :start_year
    column :end_year
    column :approved
    column :highlighted
    # column :created_at, align: :center
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  form do |project|
    text_field :project_name
    text_field :lead_organization
    resource_organization_types = Project.organization_types.keys.map { |organization_type| [organization_type.humanize, organization_type] }
    select :organization_type, resource_organization_types, { label: "Organization types" }

    text_field :project_org_url
    text_field :partner_name
    text_field :start_year
    text_field :end_year
    text_field :country
    text_field :country_code
    text_field :size_of_project_ha
    text_field :trees_planted_number
    text_field :name_org_donor
    text_field :comment


    check_box :has_project_partners
    check_box :has_explicit_location
    check_box :identify_deforestation_driver
    check_box :fire_prevention
    check_box :has_justification_for_approach
    check_box :addresses_known_threats
    check_box :discloses_species_used
    check_box :use_native_species
    check_box :use_exotic_species
    check_box :local_seedling_nurseries
    check_box :has_public_reports
    check_box :follow_up_disclosed
    check_box :has_community_involvement
    check_box :has_gender_component
    check_box :scientific_research_associated_with_project
    check_box :news_articles_associated_with_project
    check_box :highlighted
    check_box :approved


    resource_forest_types = Project.forest_types.keys.map { |forest_type| [forest_type.humanize, forest_type] }
    select :forest_type, resource_forest_types, { label: "Forest types" }, multiple: true

    resource_approaches = Project.approaches.keys.map { |approach| [approach.humanize, approach] }
    select :approach, resource_approaches, { label: "Approaches" }, multiple: true

    resource_primary_objective_purposes = Project.primary_objective_purposes.keys.map { |primary_objective_purpose| [primary_objective_purpose.humanize, primary_objective_purpose] }
    select :primary_objective_purpose, resource_primary_objective_purposes, { label: "Primary objective purposes" }, multiple: true

    resource_financial_models = Project.financial_models.keys.map { |financial_model| [financial_model.humanize, financial_model] }
    select :financial_model, resource_financial_models, { label: "Financial models" }, multiple: true

    resource_financial_models = Project.financial_models.keys.map { |financial_model| [financial_model.humanize, financial_model] }
    select :financial_model, resource_financial_models, { label: "Financial models" }, multiple: true

    resource_type_of_follow_ups = Project.type_of_follow_ups.keys.map { |type_of_follow_up| [type_of_follow_up.humanize, type_of_follow_up] }
    select :type_of_follow_up, resource_type_of_follow_ups, { label: "Type of follow up" }, multiple: true
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:project).permit(:name, ...)
  # end
end
