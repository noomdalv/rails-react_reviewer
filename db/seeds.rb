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
    image_url: "http://localhost:3000/assets/atomlogo.png"
  },
  {
    name: "Visual Studio Code",
    image_url: "http://localhost:3000/assets/visualstudiologo.png"
  },
  {
    name: "Vim",
    image_url: "http://localhost:3000/assets/vimlogo.png"
  },
  {
    name: "Notepad++",
    image_url: "http://localhost:3000/assets/notepadpluspluslogo.png"
  },
  {
    name: "Brackets",
    image_url: "http://localhost:3000/assets/bracketslogo.png"
  },
  {
    name: "Bluefish",
    image_url: "http://localhost:3000/assets/bluefishlogo.png"
  },
  {
    name: "Sublime Text",
    image_url: "http://localhost:3000/assets/sublimelogo.png"
  },
  {
    name: "Emacs",
    image_url: "http://localhost:3000/assets/emacslogo.png"
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
