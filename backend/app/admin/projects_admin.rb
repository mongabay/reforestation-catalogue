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
    scope :approved, -> { Project.unscoped.where(approved: true).order(:project_name) }
    scope :pending, -> { Project.unscoped.where(approved: false).order(:project_name) }
    scope :highlighted, -> { Project.unscoped.where(highlighted: true).order(:project_name) }
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :project_name do |project|
      if project.updated_from_previous_version?
        changed_badge + project.project_name
      elsif project.previous_version.nil? && !project.approved?
        added_badge + project.project_name
      else
        project.project_name
      end
    end
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
    tab :general do
      text_field_with_diff :project_name
      text_field_with_diff :lead_organization
      resource_organization_types = Project.organization_types.keys.map { |organization_type| [organization_type.humanize, organization_type] }
      select_with_diff :organization_type, resource_organization_types, { label: "Organization types" }

      text_field_with_diff :project_org_url
      text_field_with_diff :partner_name
      text_field_with_diff :start_year
      text_field_with_diff :end_year, { label: "End year (Ongoing projects have a value of 0)" }
      text_field_with_diff :country
      text_field_with_diff :country_code
      text_field_with_diff :size_of_project_ha
      text_field_with_diff :trees_planted_number
      text_field_with_diff :name_org_donor
      text_field_with_diff :comment

      three_state_input = [['Yes', true], ['No', false], ['n/a', nil]]

      select_with_diff :has_project_partners, three_state_input
      select_with_diff :has_explicit_location, three_state_input
      select_with_diff :identify_deforestation_driver, three_state_input
      select_with_diff :fire_prevention, three_state_input
      select_with_diff :has_justification_for_approach, three_state_input
      select_with_diff :addresses_known_threats, three_state_input
      select_with_diff :discloses_species_used, three_state_input
      select_with_diff :use_native_species, three_state_input
      select_with_diff :use_exotic_species, three_state_input
      select_with_diff :local_seedling_nurseries, three_state_input
      select_with_diff :has_public_reports, three_state_input
      select_with_diff :follow_up_disclosed, three_state_input
      select_with_diff :has_community_involvement, three_state_input
      select_with_diff :has_gender_component, three_state_input
      select_with_diff :scientific_research_associated_with_project, three_state_input
      select_with_diff :news_articles_associated_with_project, three_state_input

      resource_forest_types = Project.forest_types.keys.map { |forest_type| [forest_type.humanize, forest_type] }
      select_with_diff :forest_type, resource_forest_types, { label: "Forest types" }, multiple: true

      resource_approaches = Project.approaches.keys.map { |approach| [approach.humanize, approach] }
      select_with_diff :approach, resource_approaches, { label: "Approaches" }, multiple: true

      resource_primary_objective_purposes = Project.primary_objective_purposes.keys.map { |primary_objective_purpose| [primary_objective_purpose.humanize, primary_objective_purpose] }
      select_with_diff :primary_objective_purpose, resource_primary_objective_purposes, { label: "Primary objective purposes" }, multiple: true

      resource_financial_models = Project.financial_models.keys.map { |financial_model| [financial_model.humanize, financial_model] }
      select_with_diff :financial_model, resource_financial_models, { label: "Financial models" }, multiple: true

      resource_type_of_follow_ups = Project.type_of_follow_ups.keys.map { |type_of_follow_up| [type_of_follow_up.humanize, type_of_follow_up] }
      select_with_diff :type_of_follow_up, resource_type_of_follow_ups, { label: "Type of follow up" }, multiple: true

      resource_who_is_involved = Project.who_is_involveds.keys.map { |who_is_involved| [who_is_involved.humanize, who_is_involved] }
      select_with_diff :who_is_involved, resource_who_is_involved, { label: 'Who is involved'}, multiple: true

      check_box_with_diff :highlighted
      check_box_with_diff :approved
    end

    tab :project_links do
      concat content_tag(:h4, 'Added or changed links', class: 'mt-3 mb-0')

      table project.project_links, admin: :project_links do
        column :title do |project_link|
          if project_link.updated_from_previous_version?
            changed_badge + project_link.title
          elsif project_link.previous_version.nil? && !project_link.approved?
            added_badge + project_link.title
          else
            project_link.title
          end
        end
        column :description
        column :url
      end

      concat content_tag(:h4, 'Removed links', class: 'mt-3 mb-0')

      table project.removed_project_links do
        column :title do |project_link|
          removed_badge + content_tag(:div, project_link.title)
        end
        column :description
        column :url
      end


      concat admin_link_to('New Link', admin: :project_links, action: :new, params: { project_id: project }, class: 'btn btn-success')
    end

    tab :project_contacts do
      table project.project_contacts, admin: :project_contacts do
        column :name
        column :company
        column :email
      end

      concat admin_link_to('New Contact', admin: :project_contacts, action: :new, params: { project_id: project }, class: 'btn btn-success')
    end
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
