json.listing do
    json.extract @listing, :host_id, :price, :title, :description, :address, :city, :num_of_guests, :num_of_bedrooms, :num_of_beds, :num_of_baths
end