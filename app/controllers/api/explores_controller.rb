class Api::ExploresController < ApplicationController

  def index
    user_posts = Post.where(user: current_user).all.order(created_at: :desc)
    followers_posts = Post.where(user: current_user.following).all.order(created_at: :desc)
    posts = user_posts + followers_posts
    @explore_posts = Post.all - posts
    render "api/explore_posts/index"
  end

end
