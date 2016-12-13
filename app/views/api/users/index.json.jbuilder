json.array! @users do |user|
  json.id user.user_id
  json.username user.username
end
