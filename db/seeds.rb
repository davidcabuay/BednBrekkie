# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Listing.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
        # username: 'Demo-lition', 
        email: 'demo@user.io', 
        password: 'password'
    )

    # More users
    10.times do 
        User.create!({
        # username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
        }) 
    end

    # 5.times do 
        Listing.create!(
        # username: Faker::Internet.unique.username(specifier: 3),
        host_id: 1,
        price: 500,
        title: '2 bedroom house', 
        description: '2 bed 2 bath',
        address: 'Granville',
        city: 'Vancouver',
        num_of_guests: 2,
        num_of_bedrooms: 2,
        num_of_baths: 2,
        num_of_beds: 2
        ) 
    # end
    
    Listing.create!(
        # username: Faker::Internet.unique.username(specifier: 3),
        host_id: 2,
        price: 300,
        title: '1 bedroom house', 
        description: '2 bed 1 bath',
        address: 'Hastings',
        city: 'Vancouver',
        num_of_guests: 2,
        num_of_bedrooms: 1,
        num_of_baths: 2,
        num_of_beds: 1
        ) 

    Listing.create!(
            # username: Faker::Internet.unique.username(specifier: 3),
        host_id: 3,
        price: 300,
        title: '4 bedroom house', 
        description: '5 bed 3 bath',
        address: 'Kitsilano',
        city: 'Vancouver',
        num_of_guests: 8,
        num_of_bedrooms: 4,
        num_of_baths: 3,
        num_of_beds: 6
    ) 
    Listing.create!(
        # username: Faker::Internet.unique.username(specifier: 3),
    host_id: 4,
    price: 400,
    title: '5 bedroom house', 
    description: '6 bed 3 bath',
    address: 'Seymour',
    city: 'Vancouver',
    num_of_guests: 8,
    num_of_bedrooms: 4,
    num_of_baths: 3,
    num_of_beds: 6
) 

Listing.create!(
    # username: Faker::Internet.unique.username(specifier: 3),
host_id: 5,
price: 300,
title: '4 bedroom house', 
description: '5 bed 3 bath',
address: 'Kitsilano',
city: 'Vancouver',
num_of_guests: 8,
num_of_bedrooms: 4,
num_of_baths: 3,
num_of_beds: 6
) 

Listing.create!(
    # username: Faker::Internet.unique.username(specifier: 3),
host_id: 6,
price: 300,
title: '4 bedroom house', 
description: '5 bed 3 bath',
address: 'Kitsilano',
city: 'Vancouver',
num_of_guests: 8,
num_of_bedrooms: 4,
num_of_baths: 3,
num_of_beds: 6
) 

Listing.create!(
    # username: Faker::Internet.unique.username(specifier: 3),
host_id: 7,
price: 300,
title: '4 bedroom house', 
description: '5 bed 3 bath',
address: 'Kitsilano',
city: 'Vancouver',
num_of_guests: 8,
num_of_bedrooms: 4,
num_of_baths: 3,
num_of_beds: 6
) 

Listing.create!(
    # username: Faker::Internet.unique.username(specifier: 3),
host_id: 8,
price: 300,
title: '4 bedroom house', 
description: '5 bed 3 bath',
address: 'Kitsilano',
city: 'Vancouver',
num_of_guests: 8,
num_of_bedrooms: 4,
num_of_baths: 3,
num_of_beds: 6
) 

Listing.create!(
    # username: Faker::Internet.unique.username(specifier: 3),
host_id: 9,
price: 300,
title: '4 bedroom house', 
description: '5 bed 3 bath',
address: 'Kitsilano',
city: 'Vancouver',
num_of_guests: 8,
num_of_bedrooms: 4,
num_of_baths: 3,
num_of_beds: 6
) 

Listing.create!(
    # username: Faker::Internet.unique.username(specifier: 3),
host_id: 10,
price: 300,
title: '4 bedroom house', 
description: '5 bed 3 bath',
address: 'Kitsilano',
city: 'Vancouver',
num_of_guests: 8,
num_of_bedrooms: 4,
num_of_baths: 3,
num_of_beds: 6
) 

Listing.create!(
    # username: Faker::Internet.unique.username(specifier: 3),
host_id: 11,
price: 300,
title: '4 bedroom house', 
description: '5 bed 3 bath',
address: 'Kitsilano',
city: 'Vancouver',
num_of_guests: 8,
num_of_bedrooms: 4,
num_of_baths: 3,
num_of_beds: 6
) 

                
    puts "Done!"
end