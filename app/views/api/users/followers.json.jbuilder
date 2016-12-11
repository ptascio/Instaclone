json.array! @followers do |follower|
  json.id follower.id
  json.email follower.email
  json.username follower.username
end
