# post.comments.map do |comment|
#   comment.id
# end


  json.postId @comment.post_id
  json.body @comment.body
  json.userId @comment.user_id
  json.id @comment.id
    debugger
