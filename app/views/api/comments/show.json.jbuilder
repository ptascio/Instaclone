# post.comments.map do |comment|
#   comment.id
# end

json.array! @comments do |comment|
  json.postId comment.post_id
  json.body comment.body
  json.username comment.user_id.username
end
