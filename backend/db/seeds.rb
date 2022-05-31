# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
StaticPage.create(slug:"about", title:"About")
StaticPage.create(slug:"glosary", title:"Glosary")
User.create(email: "admin@example.com", password: "password", first_name: "Admin", last_name: "User")
User.create(email: "pablo.urrutia@vizzuality.com", password: "password", first_name: "Admin", last_name: "User")
User.create(email: "ibrahim.lachguer@vizzuality.com", password: "password", first_name: "Admin", last_name: "User")
User.create(email: "teona.teodorescu@vizzuality.com", password: "password", first_name: "Admin", last_name: "User")
