class CreateFilters < ActiveRecord::Migration[7.0]
  def change
    create_table :filters do |t|
      t.string :slug
      t.string :label
      t.integer :data_type
      t.integer :query_mode
      t.boolean :hide
      t.integer :enum_id
      t.integer :form_order
      t.integer :filter_group_order
      t.boolean :form_required
      
      t.timestamps
    end
  end
end
