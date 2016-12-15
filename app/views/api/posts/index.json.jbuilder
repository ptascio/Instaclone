
json.array! @posts do |post|
  json.id post.id
  json.username post.user.username
  json.image asset_path(post.image.url)
  json.caption post.caption
  json.created_at post.created_at
  json.comments post.comments
  json.likes post.user_likes
  json.userImg asset_path(post.user.image.url)
end
