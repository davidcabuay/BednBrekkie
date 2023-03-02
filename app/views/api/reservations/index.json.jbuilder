@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :booker_id, :listing_id, :check_in, :check_out, :num_of_guests
    end
end