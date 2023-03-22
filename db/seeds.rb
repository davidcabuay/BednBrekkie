# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# ApplicationRecord.transaction do 

require "open-uri"

    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Listing.destroy_all
    Review.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')


    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
        # username: 'Demo-lition', 
        name: 'Demotrius',
        email: 'demo@user.io', 
        password: 'password'
    )

    # More users
    20.times do 
        User.create!({
        name: Faker::Internet.unique.username(specifier: 4..8).capitalize,
        email: Faker::Internet.unique.email,
        password: 'password'
        }) 
    end

    puts "Creating listings..."
    # 5.times do 
    listing1 = Listing.create!(

        host_id: 1,
        price: 579,
        title: 'Oceanfront Coastal Home with Breathtaking Views', 
        description: 'Come discover this nature-filled coastal getaway, peaceful retreat, or an oceann front home base from which to explore the coast.',
        address: 'Moss Beach',
        city: 'California',
        num_of_guests: 8,
        num_of_bedrooms: 3,
        num_of_baths: 2,
        num_of_beds: 4
        ) 
    # end
    listing1.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing1main.jpg"), filename: "listing1main.jpg")
    listing1.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing1_1.jpg"), filename: "listing1_1.jpg")
    listing1.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing1_2.jpg"), filename: "listing1_2.jpg")
    listing1.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing1_3.jpg"), filename: "listing1_3.jpg")
    listing1.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing1_4.jpg"), filename: "listing1_4.jpg")
    
    listing2 = Listing.create!(

        host_id: 2,
        price: 916,
        title: 'Seamist Beach Cottage, Private Beach & Ocean views', 
        description: 'The beach cottage is built on the bluff over looking a spectacular show of nature at her best. The property has private stairs down to a sheltered, secluded beach. You can have beach fun and family time exploring tide pools or a romantic, quiet picnic...Just the two of you and the ocean.',
        address: 'Bodega Bay',
        city: 'California',
        num_of_guests: 4,
        num_of_bedrooms: 2,
        num_of_baths: 1,
        num_of_beds: 3
        ) 

    listing2.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing2main.jpg"), filename: "listing2main.jpg")
    listing2.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing2_1.jpg"), filename: "listing2_1.jpg")
    listing2.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing2_2.jpg"), filename: "listing2_2.jpg")
    listing2.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing2_3.jpg"), filename: "listing2_3.jpg")
    listing2.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing2_4.jpg"), filename: "listing2_4.jpg")

    listing3 = Listing.create!(
        host_id: 3,
        price: 603,
        title: 'Forest Getaway', 
        description: 'The house is surrounded by redwoods and ferns and has two large decks, one with a propane firepit with ample seating, the other with a hot tub. Hiking trails take you in minutes to the Gualala River and a sunny picnic area known as the Hot Spot.',
        address: 'Sea Ranch',
        city: 'California',
        num_of_guests: 4,
        num_of_bedrooms: 1,
        num_of_baths: 1,
        num_of_beds: 2
        ) 

    listing3.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing3main.jpg"), filename: "listing3main.jpg")
    listing3.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing3_1.jpg"), filename: "listing3_1.jpg")
    listing3.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing3_2.jpg"), filename: "listing3_2.jpg")
    listing3.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing3_3.jpg"), filename: "listing3_3.jpg")
    listing3.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing3_4.jpg"), filename: "listing3_4.jpg")
    
    listing4 = Listing.create!(
        host_id: 4,
        price: 403,
        title: 'Magical & Romantic Beachfront Home at Pajaro Dunes', 
        description: 'Feel the romance the moment you walk in the door. Electric fireplace takes the chill off the winter days and makes for a great place to read or write. Need a break from work? You will find it here.',
        address: 'Watsonville',
        city: 'California',
        num_of_guests: 4,
        num_of_bedrooms: 2,
        num_of_baths: 2,
        num_of_beds: 6
        ) 

    listing4.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing4main.jpg"), filename: "listing4main.jpg")
    listing4.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing4_1.jpg"), filename: "listing4_1.jpg")
    listing4.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing4_2.jpg"), filename: "listing4_2.jpg")
    listing4.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing4_3.jpg"), filename: "listing4_3.jpg")
    listing4.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing4_4.jpg"), filename: "listing4_4.jpg")

    listing5 = Listing.create!(
        host_id: 5,
        price: 585,
        title: 'Ocean Mountain View Home', 
        description: "Guests will enjoy the privacy of being the only residence on the premises, situated on an oversized lot nestled conveniently next to one of the largest undeveloped pieces of land in the area. Easy access to miles of pristine golden sand beaches, trails traversing a variety of natural surroundings with Pacific Ocean vistas on one side and some of California's most amazing coastal views on the other. ",
        address: 'Montara',
        city: 'California',
        num_of_guests: 8,
        num_of_bedrooms: 3,
        num_of_baths: 3,
        num_of_beds: 6
        )
        
    listing5.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing5main.jpg"), filename: "listing5main.jpg")
    listing5.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing5_1.jpg"), filename: "listing5_1.jpg")
    listing5.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing5_2.jpg"), filename: "listing5_2.jpg")
    listing5.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing5_3.jpg"), filename: "listing5_3.jpg")
    listing5.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing5_4.jpg"), filename: "listing5_4.jpg")

    listing6 = Listing.create!(
        host_id: 6,
        price: 996,
        title: '180° OceanView and HotTub', 
        description: 'This is a historic beach home, truly one of a kind. Beautiful wood work throughout and stunning views from every part of the house. Master bedroom with soaking tub built into the corner of the room. Light a fire in the gas fireplace in your room and draw a bath from which you can see the ocean and watch the moonrise over the water.',
        address: 'Santa Cruz',
        city: 'California',
        num_of_guests: 8,
        num_of_bedrooms: 3,
        num_of_baths: 3,
        num_of_beds: 4
        ) 

    listing6.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing6main.jpg"), filename: "listing6main.jpg")
    listing6.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing6_1.jpg"), filename: "listing6_1.jpg")
    listing6.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing6_2.jpg"), filename: "listing6_2.jpg")
    listing6.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing6_3.jpg"), filename: "listing6_3.jpg")
    listing6.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing6_4.jpg"), filename: "listing6_4.jpg")    

    listing7 = Listing.create!(
        host_id: 7,
        price: 809,
        title: 'Oceanfront Beach House', 
        description: 'Our beautiful beach home is the perfect place for a family vacation. The gated/private front patio is equipped with a bbq grill and a shaded conversation/dining set.',
        address: 'Moss Landing',
        city: 'California',
        num_of_guests: 7,
        num_of_bedrooms: 3,
        num_of_baths: 3,
        num_of_beds: 4
        ) 

    listing7.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing7main.jpg"), filename: "listing7main.jpg")
    listing7.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing7_1.jpg"), filename: "listing7_1.jpg")
    listing7.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing7_2.jpg"), filename: "listing7_2.jpg")
    listing7.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing7_3.jpg"), filename: "listing7_3.jpg")
    listing7.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing7_4.jpg"), filename: "listing7_4.jpg")

    listing8 = Listing.create!(
        host_id: 8,
        price: 838,
        title: 'Ocean View Spa House', 
        description: 'Beautiful home in quiet residential cul-de-sac with sweeping ocean and hillside views in the Bodega Bay. Perfect for a quiet relaxing spa-like experience. Fitted with a hot tub, sauna and BBQ, beach access, this home makes for a perfect vacation escape with friends or family!',
        address: 'Bodega Bay',
        city: 'California',
        num_of_guests: 12,
        num_of_bedrooms: 4,
        num_of_baths: 3,
        num_of_beds: 6
        ) 

    listing8.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing8main.jpg"), filename: "listing8main.jpg")
    listing8.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing8_1.jpg"), filename: "listing8_1.jpg")
    listing8.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing8_2.jpg"), filename: "listing8_2.jpg")
    listing8.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing8_3.jpg"), filename: "listing8_3.jpg")
    listing8.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing8_4.jpg"), filename: "listing8_4.jpg")

    listing9 = Listing.create!(
        host_id: 9,
        price: 513,
        title: 'Near Harbor and Steps to the Beach', 
        description: 'This unique beach house is one block from Twin Lakes beach, the finest one in Santa Cruz! It is a 2-story, designer home with an open floorplan, gridwork of glass to allow in plenty of light and offers ocean peeks. ',
        address: 'Santa Cruz',
        city: 'California',
        num_of_guests: 6,
        num_of_bedrooms: 2,
        num_of_baths: 1,
        num_of_beds: 4
        )

    listing9.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing9main.jpg"), filename: "listing9main.jpg")
    listing9.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing9_1.jpg"), filename: "listing9_1.jpg")
    listing9.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing9_2.jpg"), filename: "listing9_2.jpg")
    listing9.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing9_3.jpg"), filename: "listing9_3.jpg")
    listing9.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing9_4.jpg"), filename: "listing9_4.jpg")

    listing10 = Listing.create!(
        host_id: 10,
        price: 1223,
        title: 'Spectacular Oceanfront Home', 
        description: 'Positioned on the oceanfront, this 3,000+ sq. ft home has one of the most spectacular views along the coastline and is situated on one of the most private stretches of beach in Monterey Bay.',
        address: 'Watsonville',
        city: 'California',
        num_of_guests: 12,
        num_of_bedrooms: 4,
        num_of_baths: 4,
        num_of_beds: 8
        ) 

    listing10.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing10main.jpg"), filename: "listing10main.jpg")
    listing10.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing10_1.jpg"), filename: "listing10_1.jpg")
    listing10.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing10_2.jpg"), filename: "listing10_2.jpg")
    listing10.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing10_3.jpg"), filename: "listing10_3.jpg")
    listing10.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing10_4.jpg"), filename: "listing10_4.jpg")

    listing11 = Listing.create!(
        host_id: 11,
        price: 991,
        title: 'Fantastic, Private Beach House!', 
        description: 'This is a sunny, spacious beach house with gorgeous decks that open on to the best family and surfing beach in Santa Cruz. Step out of the surf and into the hot tub to enjoy your private view of the park, lagoon, beach and ocean.',
        address: 'Santa Cruz',
        city: 'California',
        num_of_guests: 8,
        num_of_bedrooms: 3,
        num_of_baths: 2,
        num_of_beds: 5
        ) 
    
    listing11.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing11main.jpg"), filename: "listing11main.jpg")
    listing11.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing11_1.jpg"), filename: "listing11_1.jpg")
    listing11.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing11_2.jpg"), filename: "listing11_2.jpg")
    listing11.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing11_3.jpg"), filename: "listing11_3.jpg")
    listing11.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing11_4.jpg"), filename: "listing11_4.jpg")

    listing12 = Listing.create!(
        host_id: 12,
        price: 497,
        title: 'Sunny Beach Cottage with Amazing Views', 
        description: 'Perched just above the village of Stinson Beach, this beautiful light filled home has lovely ocean and mountain views throughout, and 2 spacious bedrooms on separate floors, each with ensuite bathrooms.',
        address: 'Stinson Beach',
        city: 'California',
        num_of_guests: 4,
        num_of_bedrooms: 2,
        num_of_baths: 2,
        num_of_beds: 4
        ) 
    
    listing12.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing12main.jpg"), filename: "listing12main.jpg")
    listing12.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing12_1.jpg"), filename: "listing12_1.jpg")
    listing12.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing12_2.jpg"), filename: "listing12_2.jpg")
    listing12.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing12_3.jpg"), filename: "listing12_3.jpg")
    listing12.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing12_4.jpg"), filename: "listing12_4.jpg")

    listing13 = Listing.create!(
        host_id: 13,
        price: 678,
        title: 'Whale Watch! Fantastic Views! Hot Tub! Game Room! Dog Friendly!', 
        description: 'Located on the hill overlooking Dillon Beach, Whale Watch has phenomenal bay & ocean views and has been outfitted with every amenity your heart could desire, including brand new furnishings throughout! ',
        address: 'Dillon Beach',
        city: 'California',
        num_of_guests: 10,
        num_of_bedrooms: 3,
        num_of_baths: 3,
        num_of_beds: 6
        ) 
    
    listing13.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing13main.jpg"), filename: "listing13main.jpg")
    listing13.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing13_1.jpg"), filename: "listing13_1.jpg")
    listing13.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing13_2.jpg"), filename: "listing13_2.jpg")
    listing13.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing13_3.jpg"), filename: "listing13_3.jpg")
    listing13.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing13_4.jpg"), filename: "listing13_4.jpg")

    listing14 = Listing.create!(
        host_id: 14,
        price: 2049,
        title: 'OnTheRocks•Architectural•Estate•Dramatic Ocean Views', 
        description: 'OnTheRocks is a Frank Lloyd Wright inspired modern California Ranch w/ subtle Prairie & International architectural design; perched on a promontory overlooking cove w/ jaw dropping ocean views and mesmerizing - audible crashing white water waves.',
        address: 'Jenner',
        city: 'California',
        num_of_guests: 6,
        num_of_bedrooms: 3,
        num_of_baths: 4,
        num_of_beds: 3
        ) 
    
    listing14.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing14main.jpg"), filename: "listing14main.jpg")
    listing14.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing14_1.jpg"), filename: "listing14_1.jpg")
    listing14.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing14_2.jpg"), filename: "listing14_2.jpg")
    listing14.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing14_3.jpg"), filename: "listing14_3.jpg")
    listing14.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing14_4.jpg"), filename: "listing14_4.jpg")

    listing15 = Listing.create!(
        host_id: 15,
        price: 219,
        title: 'Charming Garden Apartment, Steps From The Beach', 
        description: 'Imagine falling asleep to the sound of crashing waves. This clean, quiet garden apartment is perfect for the nature loving city dweller. Steps from the beach, Golden Gate Park, the Zoo and more.',
        address: 'San Francisco',
        city: 'California',
        num_of_guests: 3,
        num_of_bedrooms: 1,
        num_of_baths: 1,
        num_of_beds: 2
        ) 
    
    listing15.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing15main.jpg"), filename: "listing15main.jpg")
    listing15.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing15_1.jpg"), filename: "listing15_1.jpg")
    listing15.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing15_2.jpg"), filename: "listing15_2.jpg")
    listing15.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing15_3.jpg"), filename: "listing15_3.jpg")
    listing15.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing15_4.jpg"), filename: "listing15_4.jpg")

    listing16 = Listing.create!(
        host_id: 16,
        price: 779,
        title: 'Gorgeous Oceanview, Shelter Cove, Oceanfront!', 
        description: "It's all about peace, relaxation and listening to the waves while watching the stars on the milky way from the hot tub at night. If that's not your thing, we have premium DIRECTV with sports package, and Free Starlink high speed internet.",
        address: 'Whitethorn',
        city: 'California',
        num_of_guests: 3,
        num_of_bedrooms: 1,
        num_of_baths: 1,
        num_of_beds: 1
        ) 
    
    listing16.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing16main.jpg"), filename: "listing16main.jpg")
    listing16.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing16_1.jpg"), filename: "listing16_1.jpg")
    listing16.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing16_2.jpg"), filename: "listing16_2.jpg")
    listing16.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing16_3.jpg"), filename: "listing16_3.jpg")
    listing16.photos.attach(io: URI.open("https://bednbrekkie-seeds.s3.us-west-1.amazonaws.com/listing16_4.jpg"), filename: "listing16_4.jpg")
    
    
    puts "Creating Reviews..."
    # Create one user with an easy to remember username, email, and password:
    review1 = Review.create!(
        author_id: 16,
        listing_id: 1,
        body: 'This home was the best!',
        cleanliness: 5,
        communication: 4,
        check_in: 5,
        accuracy: 5,
        location: 4,
        value: 5
    )

    review2 = Review.create!(
        author_id: 1,
        listing_id: 2,
        body: 'No, this home was the best!',
        cleanliness: 5,
        communication: 4,
        check_in: 3,
        accuracy: 4,
        location: 2,
        value: 3
    )

    review3 = Review.create!(
        author_id: 2,
        listing_id: 3,
        body: 'This home was the bestest!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review4 = Review.create!(
        author_id: 3,
        listing_id: 4,
        body: 'This home was ok at best!',
        cleanliness: 3,
        communication: 4,
        check_in: 3,
        accuracy: 4,
        location: 4,
        value: 3
    )

    review5 = Review.create!(
        author_id: 4,
        listing_id: 5,
        body: 'This home is a catfish!',
        cleanliness: 3,
        communication: 2,
        check_in: 1,
        accuracy: 5,
        location: 4,
        value: 3
    )

    review6 = Review.create!(
        author_id: 5,
        listing_id: 6,
        body: 'This home was the bestie!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review7 = Review.create!(
        author_id: 6,
        listing_id: 7,
        body: 'This home was the bester!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review8 = Review.create!(
        author_id: 7,
        listing_id: 8,
        body: 'This home was the best best!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review9 = Review.create!(
        author_id: 8,
        listing_id: 9,
        body: 'This home was the better best!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review10 = Review.create!(
        author_id: 9,
        listing_id: 10,
        body: 'This home was the good best!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review11 = Review.create!(
        author_id: 10,
        listing_id: 11,
        body: 'This home was the best home!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review12 = Review.create!(
        author_id: 11,
        listing_id: 12,
        body: 'This home was incredible!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review13 = Review.create!(
        author_id: 12,
        listing_id: 13,
        body: 'This home was fantastic!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review14 = Review.create!(
        author_id: 13,
        listing_id: 14,
        body: 'This home was dominating!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review15 = Review.create!(
        author_id: 14,
        listing_id: 15,
        body: 'This home was unstoppable!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )

    review16 = Review.create!(
        author_id: 15,
        listing_id: 16,
        body: 'This home was the ace!',
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 4,
        value: 5
    )
    
    
    
    puts "Done!"
# end