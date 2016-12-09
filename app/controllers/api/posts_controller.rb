class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  # def new
  #   @post = Post.new(post_params)
  #   render :new
  # end

  def create
    #current_user
    # @post = Post.new(post_params)

    @post = current_user.posts.new(post_params)
    if @post.save
      render "api/posts/show"
    end
  end

  private
    def post_params
      params.require(:post).permit(:image, :caption)
    end

end
