class AddForeignKeyToFilters < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :filters, :categories
  end
end
