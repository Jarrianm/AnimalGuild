# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
benny = Animal.create(name:"benny",experience: "barking", availability: "some", contact_info: "dog@gmail.com")
alex = Animal.create(name:"Alex",experience: "MEowing", availability: "NONE", contact_info: "cat@gmail.com")


john = Client.create(name:"John")

Booking.create(client_id: 1, animal_id: 2, )