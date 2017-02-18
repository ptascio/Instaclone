json.array! @explore_posts do |explore_post|
  json.id explore_post.id
  json.username explore_post.user.username
  json.image asset_path(explore_post.image.url)
  json.caption explore_post.caption
  json.created_at explore_post.created_at
  json.comments explore_post.comments
  json.likes explore_post.user_likes
  json.userImg asset_path(explore_post.user.image.url)
end
