
json.extract! user, :username, :id, :email
json.image_url asset_path(user.image.url)
json.following user.following
json.followers user.followers
json.liked_posts user.liked_posts.pluck(:id)

json.posts user.posts do |post|
  json.image asset_path(post.image.url)
  json.id post.id
  json.userId post.user_id
end
