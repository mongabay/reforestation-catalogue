class AddPreviousVersionIdToProjectLinks < ActiveRecord::Migration[7.0]
  def change
    add_reference :project_links, :previous_version, foreign_key: {to_table: :project_links}, null: true
    Project.where(approved: false).each(&:fixup_project_links_previous_version)
  end
end
