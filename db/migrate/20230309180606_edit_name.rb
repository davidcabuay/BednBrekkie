class EditName < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :name
    add_column :users, :name, :string, null: false
  end
end
