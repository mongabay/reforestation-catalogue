class CreateProjectLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :project_links do |t|
      t.belongs_to :project
      t.string :title
      t.text :description
      t.string :url

      t.timestamps
    end
  end
end
