# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create!([{ username: "GuestUser", email:"guest@email.com", password:"123456"}])
User.create!([{ username: 'Pt', email: 'pt@email.com', password: 'password'}])
User.create!([{ username: 'Jt', email: 'jt@email.com', password: 'password'}])
User.create!([{ username: 'Clare', email: 'clare@email.com', password: 'password'}])
User.create!([{ username: 'Marion', email: 'marion@email.com', password: 'password'}])
User.create!([{ username: 'Magda', email: 'magda@email.com', password: 'password'}])
User.create!([{ username: 'Aaron', email: 'aaron@email.com', password: 'password'}])

Post.destroy_all
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/niksband.jpg"),
  caption: "Listening to music..."
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/haircut.jpg"),
  caption: "need a haircut don't I?"
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/mixing.jpg"),
  caption: "Mixing in the basement!"
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/letterb.jpg"),
  caption: "My favorite letter!"
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/guitars.jpg"),
  caption: "guitar guitar guitar!"
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/lic.jpg"),
  caption: "Relaxing music..."
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/ryno.jpg"),
  caption: "On top of the world!"
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/flier.jpg"),
  caption: "Looking forward to this."
  })
Post.create!({
  user_id: User.order("RANDOM()").first.id,
  image: File.new("#{Rails.root}/app/assets/images/berlin.jpg"),
  caption: "Ich bin ein Berliner!"
  })

Relationship.destroy_all
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})
Relationship.create!({ follower_id: User.order("RANDOM()").first.id, followed_id: User.order("RANDOM()").first.id})

Like.destroy_all
Like.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id})
Like.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id})
Like.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id})
Like.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id})
Like.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id})
Like.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id})
Like.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id})

Comment.destroy_all
Comment.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id, body:"Love this pic!"})
Comment.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id, body:"Ahhh, good times..."})
Comment.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id, body:"can I user this on my blog?"})
Comment.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id, body:"This is great!"})
Comment.create!({user_id: User.order("RANDOM()").first.id, post_id: Post.order("RANDOM()").first.id, body:"Perfect!"})
