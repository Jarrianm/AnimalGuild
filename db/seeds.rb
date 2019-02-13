# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


benny = Animal.create(name:"benny",experience: "barking", availability: "some", contact_info: "dog@gmail.com",species:"Dog", image:"http://www2.pictures.livingly.com/mp/_jAgMn_-LNFl.jpg")
alex = Animal.create(name:"Alex",experience: "MEowing", availability: "NONE", contact_info: "cat@gmail.com", species:"Cat", image:"https://www.catster.com/wp-content/uploads/2016/06/vet-anemia-cat-TN-600x400.jpg")
fluffy = Animal.create(name:"fluffy",experience: "honeyFarming", availability: "some", contact_info: "bear@gmail.com", species:"bear", image:"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/07/19/104596560-GettyImages-599203776.600x400.jpg?v=1507049402")
jarrian = Animal.create(name:"jarrian",experience: "firebreathing", availability: "rare", contact_info: "dragon@gmail.com", species:"dragon", image:"https://cdn3.whatculture.com/images/2017/05/dfb45e6f7b6c9a91-600x400.jpg")
tara = Animal.create(name:"tara",experience: "howling", availability: "christmas", contact_info: "wolf@gmail.com", species:"wolf", image:"https://www.heartland.org/sebin/b/n/wolf-final%20resize.jpg5")
simon = Animal.create(name:"simon",experience: "Nuts", availability: "abundant", contact_info: "squirell@gmail.com", species:"squirell", image:"http://graphicsdrawer.com/wp-content/uploads/2018/01/squirrel-eating-lunch-graphicsdrawer-600x400.jpg")
hanaa = Animal.create(name:"hanaa",experience: "saving the galaxy", availability: "on galactic patrol", contact_info: "wookie@gmail.com", species:"wookie", image:"http://i2.wp.com/www.theyorker.co.uk/wp-content/uploads/2015/09/wookie-chewbacca-chewie-star-wars.jpg?fit=800%2C600")
kris = Animal.create(name:"kris",experience: "barking", availability: "some", contact_info: "doggo2@gmail.com",species:"Dog", image:"https://pugofmyheart.files.wordpress.com/2013/10/a-dogs-life-9-600x400.jpg")


john = Client.create(name:"John")

Booking.create(client_id: 1, animal_id: 2, )
