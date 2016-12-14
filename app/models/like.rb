class Like < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: :post_id }

  belongs_to :user
  belongs_to :post
end
