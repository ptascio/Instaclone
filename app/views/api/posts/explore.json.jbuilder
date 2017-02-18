json.array! @explore_posts do |expost|
  json.id expost.id
  json.username expost.user.username
  json.image asset_path(expost.image.url)
  json.caption expost.caption
  json.created_at expost.created_at
  json.comments expost.comments
  json.likes expost.user_likes
  json.userImg asset_path(expost.user.image.url)
end
