class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :slug
      t.string :label
      t.string :tooltip_description 
      t.string :form_description 
      t.string :step_by_step_description 

      t.timestamps
    end
  end
end
