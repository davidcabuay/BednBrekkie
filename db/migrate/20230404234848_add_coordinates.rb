class AddCoordinates < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :long, :float, null: false
    add_column :listings, :lat, :float, null:false
  end
end
