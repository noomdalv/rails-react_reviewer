# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

products = Product.create([
  {
    name: "Atom",
    image_url: "../public/atomlogo.png"
  },
  {
    name: "Bluefish",
    image_url: "../public/bluefishlogo.png"
  },
  {
    name: "Vim",
    image_url: "../public/vimlogo.png"
  },
  {
    name: "Notepad++",
    image_url: "../public/notepad++logo.png"
  },
  {
    name: "Brackets",
    image_url: "../public/bracketslogo.png"
  },
  {
    name: "Visual Studio Code",
    image_url: "../public/visualstudiologo.png"
  },
  {
    name: "Sublime Text",
    image_url: "../public/sublimelogo.png"
  },
  {
    name: "Emacs",
    image_url: "../public/emacslogo.png"
  }
])

reviews = Review.create([
  {
    title: "Great editor",
    description: "I had a good experience",
    score: 5,
    product: products.first
  },
  {
    title: "Not my cup of tea",
    description: "Too complex",
    score: 5,
    product: products.second
  }
])
