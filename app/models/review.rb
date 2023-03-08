class Review < ApplicationRecord
  validates :listing_id, :author_id, :review, :cleanliness, :communication, :check_in, :accuracy, :location, :value, presence: true

  belongs_to :listing,
  foreign_key: :listing_id,
  class_name: :Listing


  belongs_to :author
  foreign_key: :author_id,
  class_name: :User
end
