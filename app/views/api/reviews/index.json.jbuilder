@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :listing_id, :author_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value
        json.author review.author.name
        json.createdAt review.created_at.strftime("%m/%d/%Y")
        json.updatedAt review.updated_at.strftime("%m/%d/%Y")
    end
end