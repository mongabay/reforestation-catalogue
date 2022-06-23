Trestle.resource(:project_contacts) do
  menu do
    item :project_contacts, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
  #

  # Customize the form fields shown on the new/edit views.
  #
  form do |project_contact|
    projects = Project.all
    select :project, projects
    text_field :email
    text_field :name
    text_field :company

    concat admin_link_to('Back to project', admin: :projects, action: :edit, params: { id: project_contact.project }, class: 'btn btn-success')
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
