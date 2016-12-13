json.array! @comments do |comment|
  json.username comment.username
  json.body comment.body
end
