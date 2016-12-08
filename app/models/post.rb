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
  validates :image_url, presence: true
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
      class_name: "User",
      foreign_ket: :user_id,
      primary_key: :id
end
