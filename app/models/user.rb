class User < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_username,
                  :against => :username,
                  :using => :trigram

  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  has_attached_file :image, default_url: "default-profile.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :posts,
    class_name: "Post",
    foreign_key: :user_id,
    primary_key: :id

  has_many :likes, dependent: :destroy
  has_many :liked_posts,
    through: :likes,
    source:  :post

  has_many :comments,
    class_name: "Comment",
    foreign_key: :user_id,
    dependent: :destroy

  has_many :active_relationships,
    class_name: "Relationship",
    foreign_key: :follower_id,
    dependent: :destroy
  has_many :passive_relationships,
    class_name: "Relationship",
    foreign_key: :followed_id,
    dependent: :destroy

  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower


  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.gen_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.gen_session_token
    self.save!
    self.session_token
  end

  def follow(other_user)
    active_relationships.create!(followed_id: other_user.id)
  end

  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  def following?(other_user)
    following.include?(other_user)
  end

  private
    def ensure_session_token
      self.session_token ||= User.gen_session_token
    end

end
