# == Schema Information
#
# Table name: listings
#
#  id              :bigint           not null, primary key
#  host_id         :bigint           not null
#  price           :integer          not null
#  title           :string           not null
#  description     :text             not null
#  address         :string           not null
#  city            :string           not null
#  num_of_guests   :integer          not null
#  num_of_bedrooms :integer          not null
#  num_of_beds     :integer          not null
#  num_of_baths    :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Listing < ApplicationRecord
  validates :host_id, :price, :title, :description, :address, :city, :num_of_guests, :num_of_bedrooms, :num_of_beds, :num_of_baths, :long, :lat, presence: true
  
  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  has_many :reservations,
    foreign_key: :listing_id,
    class_name: :Reservation,
    dependent: :destroy

  has_many :reviews,
    foreign_key: :listing_id,
    class_name: :Review,
    dependent: :destroy

    has_many_attached :photos
end
