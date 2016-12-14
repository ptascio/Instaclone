
json.extract! user, :username, :id, :email
json.liked_posts user.liked_posts.pluck(:id)
