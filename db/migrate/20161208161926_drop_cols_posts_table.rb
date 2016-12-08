class DropColsPostsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :posts, :image_url
    remove_column :posts, :image_type
    remove_column :posts, :image_file_size
  end
end
