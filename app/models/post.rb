# == Schema Information
#
# Table name: posts
#
#  id              :integer          not null, primary key
#  image_url       :string           not null
#  image_type      :string
#  image_file_size :integer
#  caption         :string
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Post < ActiveRecord::Base
  validates :user_id, presence: true

  has_attached_file :image, default_url: "homepage_photo.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
      class_name: "User",
      foreign_key: :user_id,
      primary_key: :id
end
