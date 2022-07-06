class AddPreviousVersionIdToProjects < ActiveRecord::Migration[7.0]
  def change
    add_reference :projects, :previous_version, foreign_key: { to_table: :projects }, null: true
  end
end
