class RemoveUniqueUserIdIndexFromPosts < ActiveRecord::Migration[5.0]
  def change
    remove_index :posts, :user_id
  end
end
