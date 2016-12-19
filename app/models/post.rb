class Post < ActiveRecord::Base
  validates :user_id, presence: true

  has_attached_file :image, default_url: "homepage_photo.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
      class_name: "User",
      foreign_key: :user_id,
      primary_key: :id

  has_many :likes, dependent: :destroy
  has_many :user_likes,
    through: :likes,
    source:  :user

  has_many :comments,
    class_name: "Comment",
    foreign_key: :post_id,
    dependent:   :destroy
end
