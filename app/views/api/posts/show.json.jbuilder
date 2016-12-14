
json.id @post.id
json.username @post.user.username
json.image asset_path(@post.image.url)
json.user_likes @post.user_likes.map(&:id)
