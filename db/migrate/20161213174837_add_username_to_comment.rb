class AddUsernameToComment < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :username, :string
  end
end
