json.array! @posts do |post|
  json.username post.user.username
  json.image asset_path(post.image.url)
end
