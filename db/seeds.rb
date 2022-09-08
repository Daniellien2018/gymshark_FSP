# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do 
  
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
    
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
    puts "Done!"

    p1 = Product.create(name: "Crew Socks", price: 24.00, category: "Accessories", description: "The Gymshark Crew Socks provide comfort, cushioning and contouring with a mix of reinforced stretch and ribbing and a flattering fit to the calf. You can be sure you’ll step with support and step with style, from treadmill to sidewalk.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/1-Crew+Socks.png')
    p1.photo.attach(io: file, filename: '1-Crew+Socks.png')
    
    p2 = Product.create(name: "Water Bottle", price: 18.00, category: "Accessories",  description: "Stay hydrated throughout the day, wherever you go, with the Half Gallon Water Bottle. A 74 oz capacity means you’ll never go thirsty, while an easy-hold side handle and harnessed screw cap make it a convenient carry along.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/2-Water+Bottle.png')
    p2.photo.attach(io: file, filename: '2-Water+Bottle.png')
    
    p3 = Product.create(name: "Sharkhead Cap", price: 26.00, category: "Accessories",  description: "The Sharkhead Cap is the perfect accessory to make sure you feel good in every ‘fit. With a classic curved peak structure and Gymshark logo, this is a cap that offers a reliable design, for a look that’s sure to get heads turning.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/3-Sharkhead+Cap.png')
    p3.photo.attach(io: file, filename: '3-Sharkhead+Cap.png')

    p4 = Product.create(name: "Foam Roller", price: 30.00, category: "Accessories",  description: "For deep-tissue massaging, effective injury prevention and post-workout muscle rehabilitation, the Premium Foam Roller is ideal. Its advanced foam pattern works to iron out the tightest knots and shift the most stubborn lactic acid to ensure you’re ready for your next workout, whenever it comes.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/4-Foam+Roller.png')
    p4.photo.attach(io: file, filename: '4-Foam+Roller.png')

    p5 = Product.create(name: "Scrunchies 3PK", price: 14.00, category: "Accessories",  description: "When it comes to training, we want our accessories to enhance our perfomance, but we also want to feel our best. The Gymshark Scrunchies offer a stylish solution, so you’ll want to wear your hair up even on wash day.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/5-Scrunchies+3Pk.png')
    p5.photo.attach(io: file, filename: '5-Scrunchies+3Pk.png')

    p6 = Product.create(name: "Essential Oversized T-Shirt", price: 26.00, category: "Mens",  description: "Our Essential collection takes it back to basics and does it well. Classic styles, versatile colours and simple designs mean no gym bag is complete without one of these pieces, whether you’re training, commuting, or resting.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/1-Essential+Oversized+T-Shirt.png')
    p6.photo.attach(io: file, filename: '1-Essential+Oversized+T-Shirt.png')

    p7 = Product.create(name: "Essential Oversized T-Shirt-br", price: 26.00, category: "Mens",  description: "Our Essential collection takes it back to basics and does it well. Classic styles, versatile colours and simple designs mean no gym bag is complete without one of these pieces, whether you’re training, commuting, or resting.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/2-Essential+Oversized+T-Shirt.png')
    p7.photo.attach(io: file, filename: '2-Essential+Oversized+T-Shirt.png')

    p8 = Product.create(name: "Block Stringer", price: 22.00, category: "Mens",  description: "Represent resolute pride in the Block collection. Workout or chill-out ready, you can move without interference with comfortable fits and a soft material. And, leave no doubt that you’re part of the Gymshark fam with a bold, block logo front and centre.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/3-Block+Stringer.png')
    p8.photo.attach(io: file, filename: '3-Block+Stringer.png')

    p9 = Product.create(name: "Bold Drop Arm Tank", price: 25.00, category: "Mens",  description: "A bold design for even bolder moves. The Bold Drop Arm Tank offers lightweight comfort and slight stretch to adapt to any exercise, with a striking Gymshark graphic on the back for a powerful aesthetic.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/4-Bold+Drop+Arm+Tank.png')
    p9.photo.attach(io: file, filename: '4-Bold+Drop+Arm+Tank.png')

    p10 = Product.create(name: "Legacy Drop Arm Tank", price: 28.00, category: "Mens",  description: "The Legacy collection takes it back to where it all started. With functional shapes, sweat-wicking tech and durable soft material, you can train with passion and power, every time, in an authentic lifting look. Then add in the revamped original Gymshark logo sitting loud and proud on every piece, and you’ve got a timeless classic that’ll never let you down. All that’s left is for you to put in the work, and start building your own legacy.")
    file = URI.open('https://gymshark-seed.s3.us-west-1.amazonaws.com/5-Legacy+Drop+Arm+Tank.png')
    p10.photo.attach(io: file, filename: '5-Legacy+Drop+Arm+Tank.png')


  end