class Api::PostsController < ApplicationController

  def index
    user_posts = Post.where(user: current_user).all.order(created_at: :desc)
    followers_posts = Post.where(user: current_user.following).all.order(created_at: :desc)
    #cheap fix?
    @posts = user_posts + followers_posts
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render "api/posts/index"
    end
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    if current_user.id == @post.user.id
      @post.destroy
      render "api/posts/show"
    else
      render js: "alert('You can't delete another's posts!);"
    end
  end

  private
    def post_params
      params.require(:post).permit(:image, :caption)
    end

end
