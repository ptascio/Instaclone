class RemoveFollowersColumnFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :followers
    remove_column :users, :following
  end
end
