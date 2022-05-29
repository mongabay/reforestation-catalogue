class CreateProjectCategory < ActiveRecord::Migration[7.0]
  def change
    create_table :project_categories do |t|
      t.belongs_to :project
      t.belongs_to :category
      t.float :percentage

      t.timestamps
    end
  end
end
