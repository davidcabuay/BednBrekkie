class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :listing, null: false, foreign_key: {to_table: :listings}
      t.references :booker, null: false, foreign_key: {to_table: :users}
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
      t.integer :num_of_guests, null: false

      t.timestamps
    end
  end
end
