json.review do
    json.extract! @review, :id, :listing_id, :author_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value
    json.author @review.author.name
end