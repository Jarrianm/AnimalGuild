# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


benny = Animal.create(name:"benny",experience: "barking", availability: "some", contact_info: "dog@gmail.com",species:"Dog")
alex = Animal.create(name:"Alex",experience: "MEowing", availability: "NONE", contact_info: "cat@gmail.com", species:"Cat")
fluffy = Animal.create(name:"fluffy",experience: "honeyFarming", availability: "some", contact_info: "bear@gmail.com", species:"bear")
jarrian = Animal.create(name:"jarrian",experience: "firebreathing", availability: "rare", contact_info: "dragon@gmail.com", species:"dragon")
tara = Animal.create(name:"tara",experience: "howling", availability: "christmas", contact_info: "wolf@gmail.com", species:"wolf")
simon = Animal.create(name:"simon",experience: "Nuts", availability: "abundant", contact_info: "squirell@gmail.com", species:"squirell")
hanaa = Animal.create(name:"hanaa",experience: "saving the galaxy", availability: "on galactic patrol", contact_info: "wookie@gmail.com", species:"wookie")


john = Client.create(name:"John")

Booking.create(client_id: 1, animal_id: 2, )
