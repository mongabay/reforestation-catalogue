Trestle.resource(:project_links) do
  build_instance do |attrs, params|
    scope = params[:project_id] ? Project.find(params[:project_id]).project_links : ProjectLink
    scope.new(attrs)
  end

  menu do
    item :project_links, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :project_name
    column :title
    column :description
    column :url
    # column :created_at, align: :center
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  form do |project_link|
    if project_link.project
      hidden_field :project_id
    else
      select :project_id, Project.all.map { |p| [p.project_name, p.id] }
    end
    text_field :title
    text_field :description
    text_field :url

    if project_link.project
      concat admin_link_to('Back to project', admin: :projects, action: :edit, params: { id: project_link.project }, class: 'btn btn-success')
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
