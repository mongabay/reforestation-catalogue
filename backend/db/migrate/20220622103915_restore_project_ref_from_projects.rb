class RestoreProjectRefFromProjects < ActiveRecord::Migration[7.0]
  def change
    add_reference :projects, :project, null: true
  end
end
