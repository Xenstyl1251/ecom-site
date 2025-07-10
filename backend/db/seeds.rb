# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Product.create(
  title: "Adidas F50 Elite Laceless FG",
  description: "F50 Speed and Lightweight Speed: The adidas F50 series in built for maximum speed and agility whilst offering a locked-in and comfortable feel. Everything about the new generation boot is built for explosive acceleration and controlling the ball while travelling at speed. The boots will be available in laced and laceless will be worn on pitch for the first-time by adidas speed players such as Lionel Messi, Rafael Leao, Son Heung-min, Lamine Yamal and Florian Wirtz. The iconic adidas F50 returns to The World's Largest Bootroom at YPSoccer for the first time in 9 years. Re-designed to support the needs of the modern-day player.",
  master_attributes: { "price": 3500.00, "stocks": 10 })
