Trestle.resource(:project_links) do
  menu do
    item :project_links, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
  #

  # Customize the form fields shown on the new/edit views.
  #
  form do |project_link|
    projects = Project.all
    select :project, projects
    text_field :title
    text_field :description
    text_field :url

    concat admin_link_to('Back to project', admin: :projects, action: :edit, params: { id: project_link.project }, class: 'btn btn-success')
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
