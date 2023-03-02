# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_02_175925) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.bigint "host_id", null: false
    t.integer "price", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.integer "num_of_guests", null: false
    t.integer "num_of_bedrooms", null: false
    t.integer "num_of_beds", null: false
    t.integer "num_of_baths", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_listings_on_host_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "booker_id", null: false
    t.datetime "check_in", null: false
    t.datetime "check_out", null: false
    t.integer "num_of_guests", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["booker_id"], name: "index_reservations_on_booker_id"
    t.index ["listing_id"], name: "index_reservations_on_listing_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "listings", "users", column: "host_id"
  add_foreign_key "reservations", "listings"
  add_foreign_key "reservations", "users", column: "booker_id"
end
