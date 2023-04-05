@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :host_id, :price, :title, :description, :address, :city, :num_of_guests, :num_of_bedrooms, :num_of_beds, :num_of_baths, :lat, :long
        # json.photoUrls listing.photos.map {|photo| photo.url}
        json.host listing.host.name
        json.photoUrls listing.photos.map {|photo| url_for(photo)}
    end
end