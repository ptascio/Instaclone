
json.extract! user, :username, :id, :email
json.image_url asset_path(user.image.url)
json.following user.following
json.followers user.followers
json.posts user.posts
json.liked_posts user.liked_posts.pluck(:id)
