json.array! @comments do |comment|
  json.body comment.body
  json.username comment.user_id.username
end
