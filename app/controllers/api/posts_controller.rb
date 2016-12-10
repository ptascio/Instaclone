class Api::PostsController < ApplicationController

  def index
    @posts = Post.includes(:user).all.order(created_at: :desc)
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render "api/posts/show"
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
