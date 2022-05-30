class AddCategoryToFilters < ActiveRecord::Migration[7.0]
  def change
    add_reference :filters, :category
  end
end
