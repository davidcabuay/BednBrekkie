json.reservation do
    json.extract! @reservation, :booker_id, :listing_id, :check_in, :check_out, :num_of_guests
end