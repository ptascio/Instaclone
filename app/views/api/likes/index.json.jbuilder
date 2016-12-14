json.array! @likes do |like|
  json.id like.id
  json.userId like.user_id
  json.postId like.post_id
end
