class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string  :image_url, null: false
      t.string  :image_type
      t.integer :image_file_size
      t.string  :caption
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index("posts", "user_id", unique: true)
  end
end
