class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :listing, null: false, foreign_key: {to_table: :listings}
      t.references :author, null: false, foreign_key: {to_table: :users}
      t.text :review, null:false
      t.integer :cleanliness, null:false
      t.integer :communication, null:false
      t.integer :check_in, null:false
      t.integer :accuracy, null:false
      t.integer :location, null:false
      t.integer :value, null:false

      t.timestamps
    end
  end
end
