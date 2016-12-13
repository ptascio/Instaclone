# == Schema Information
#
# Table name: relationships
#
#  id          :integer          not null, primary key
#  follower_id :integer
#  followed_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Relationship < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true
  belongs_to :follower,
    class_name: "User"

  belongs_to :followed,
    class_name: "User"
end
