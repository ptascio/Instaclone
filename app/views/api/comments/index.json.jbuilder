json.array! @comments do |comment|
  json.id comment.id
  json.postId comment.post_id
  json.userId comment.user_id
  json.username comment.username
  json.body comment.body
end
