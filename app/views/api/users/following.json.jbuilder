json.array! @users do |user|
  json.username user.username
  json.id user.id
  json.email user.email
end
