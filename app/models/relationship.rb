class Relationship < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true
  belongs_to :follower,
    class_name: "User"

  belongs_to :followed,
    class_name: "User"
end
