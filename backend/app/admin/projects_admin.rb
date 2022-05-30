Trestle.resource(:projects) do
  menu do
    item :projects, icon: "fa fa-star"
  end

  scopes do
    scope :all, default: true
    scope :approved, -> { Project.where(approved: true) }
    scope :pending, -> { Project.where(approved: false) }
    scope :highlighted, -> { Project.where(highlighted: true) }
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :project_name
    column :lead_organization
    column :organization_type
    column :start_year
    column :end_year
    # column :created_at, align: :center
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  # form do |project|
  #   text_field :name
  #
  #   row do
  #     col { datetime_field :updated_at }
  #     col { datetime_field :created_at }
  #   end
  # end

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
