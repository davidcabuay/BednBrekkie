class Reservation < ApplicationRecord
  validates :booker_id, :listing_id, :check_in, :check_out, :num_of_guests, presence: true
  
  belongs_to :listing,
  foreign_key: :listing_id,
  class_name: :Listing

  belongs_to :booker,
  foreign_key: :booker_id,
  class_name: :User
end
