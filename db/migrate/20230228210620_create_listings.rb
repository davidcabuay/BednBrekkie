class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.references :host, null: false, foreign_key: {to_table: :users}
      t.integer :price, null:false
      t.string :title, null:false
      t.text :description, null:false
      t.string :address, null:false
      t.string :city, null:false
      t.integer :num_of_guests, null:false
      t.integer :num_of_bedrooms, null:false
      t.integer :num_of_beds, null:false
      t.integer :num_of_baths, null:false

      t.timestamps
    end
  end
end
