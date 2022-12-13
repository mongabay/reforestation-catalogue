Trestle.resource(:project_contacts) do
  build_instance do |attrs, params|
    scope = params[:project_id] ? Project.find(params[:project_id]).project_contacts : ProjectContact
    scope.new(attrs)
  end

  menu do
    item :project_contacts, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :project_name
    column :email
    column :name
    column :company
    # column :created_at, align: :center
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  form do |project_contact|
    if project_contact.project
      hidden_field :project_id
    else
      select :project_id, Project.all.map { |p| [p.project_name, p.id] }, include_blank: true
    end
    text_field :email
    text_field :name
    text_field :company

    if project_contact.project
      concat admin_link_to('Back to project', admin: :projects, action: :edit, params: { id: project_contact.project }, class: 'btn btn-success')
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
