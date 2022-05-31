class CreateProjectContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :project_contacts do |t|
      t.belongs_to :project
      t.string :email
      t.string :name
      t.string :company

      t.timestamps
    end
  end
end
