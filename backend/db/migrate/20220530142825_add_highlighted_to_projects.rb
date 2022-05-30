class AddHighlightedToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :highlighted, :boolean, default: false
  end
end
