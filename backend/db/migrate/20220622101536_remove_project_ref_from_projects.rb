class RemoveProjectRefFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_reference :projects, :project, null: true
  end
end
