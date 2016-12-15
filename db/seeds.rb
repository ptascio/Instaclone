# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create!([{ id: 1, username: "GuestUser", email:"guest@email.com", password:"123456"}])
User.create!([{ id: 2, username: 'Pt', email: 'pt@email.com', password: 'password'}])
User.create!([{ id:3, username: 'Jt', email: 'jt@email.com', password: 'password'}])
User.create!([{ id: 4, username: 'Clare', email: 'clare@email.com', password: 'password'}])
User.create!([{ id: 5, username: 'Marion', email: 'marion@email.com', password: 'password'}])
User.create!([{ id: 6, username: 'Magda', email: 'magda@email.com', password: 'password'}])
User.create!([{ id: 7, username: 'Aaron', email: 'aaron@email.com', password: 'password'}])

Post.destroy_all
Post.create!({
  id: 1,
  user_id: 1,
  image: File.new("#{Rails.root}/app/assets/images/niksband.jpg"),
  caption: "Listening to music...",
  created_at: "2016-12-15 10:43:42"
  })
Post.create!({
  id: 2,
  user_id: 2,
  image: File.new("#{Rails.root}/app/assets/images/haircut.jpg"),
  caption: "need a haircut don't I?",
  created_at: "2016-12-15 12:43:42"
  })
Post.create!({
  id: 3,
  user_id: 3,
  image: File.new("#{Rails.root}/app/assets/images/mixing.jpg"),
  caption: "Mixing in the basement!",
  created_at: "2016-12-11 11:23:42"
  })
Post.create!({
  id: 4,
  user_id: 5,
  image: File.new("#{Rails.root}/app/assets/images/letterb.jpg"),
  caption: "My favorite letter!",
  created_at: "2016-12-10 13:23:42"
  })
Post.create!({
  id: 5,
  user_id: 7,
  image: File.new("#{Rails.root}/app/assets/images/guitars.jpg"),
  caption: "guitar guitar guitar!",
  created_at: "2016-12-12 13:33:42"
  })
Post.create!({
  id: 6,
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/lic.jpg"),
  caption: "Relaxing music...",
  created_at: "2016-12-09 13:43:42"
  })
Post.create!({
  id: 7,
  user_id: 6,
  image: File.new("#{Rails.root}/app/assets/images/ryno.jpg"),
  caption: "Ryan is on top of the world!",
  created_at: "2016-12-12 13:43:42"
  })
Post.create!({
  id: 8,
  user_id: 4,
  image: File.new("#{Rails.root}/app/assets/images/flier.jpg"),
  caption: "Looking forward to this.",
  created_at: "2016-12-10 13:43:42"
  })
Post.create!({
  id: 9,
  user_id: 6,
  image: File.new("#{Rails.root}/app/assets/images/berlin.jpg"),
  caption: "Ich bin ein Berliner!",
  created_at: "2016-12-11 13:43:42"
  })

Relationship.destroy_all
Relationship.create!({ follower_id: 1, followed_id: 2})
Relationship.create!({ follower_id: 1, followed_id: 3})
Relationship.create!({ follower_id: 1, followed_id: 4})
Relationship.create!({ follower_id: 1, followed_id: 5})
Relationship.create!({ follower_id: 1, followed_id: 6})
Relationship.create!({ follower_id: 1, followed_id: 7})
Relationship.create!({ follower_id: 2, followed_id: 1})
Relationship.create!({ follower_id: 2, followed_id: 3})
Relationship.create!({ follower_id: 2, followed_id: 4})

Like.destroy_all
Like.create!({user_id: 1, post_id: 2})
Like.create!({user_id: 1, post_id: 3})
Like.create!({user_id: 1, post_id: 4})
Like.create!({user_id: 2, post_id: 1})
Like.create!({user_id: 2, post_id: 4})
Like.create!({user_id: 2, post_id: 5})
Like.create!({user_id: 2, post_id: 7})
Like.create!({user_id: 1, post_id: 7})

Comment.destroy_all
Comment.create!({user_id: 2, username: "Pt", post_id: 1, body:"Great band!"})
Comment.create!({user_id: 3, username: "Jt", post_id: 1, body:"Yeah they're music rocks!"})
Comment.create!({user_id: 1, username: "GuestUser", post_id: 2, body:"yeah, might be time for a haircut :)"})
Comment.create!({user_id: 3, username: "Jt", post_id: 2, body:"No way let it grow!"})
Comment.create!({user_id: 1, username: "GuestUser", post_id: 5, body:"Just a suggestion but...maybe one more guitar?"})
Comment.create!({user_id: 2, username: "Pt", post_id: 5, body:"Play loud!"})
Comment.create!({user_id: 4, username: "Clare", post_id: 5, body:"I'm all about the bass!"})
Comment.create!({user_id: 1, username: "GuestUser", post_id: 7, body:"Looking at this makes me happy :)"})
