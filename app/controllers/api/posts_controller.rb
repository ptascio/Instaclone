class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to post_url(@post.id)
    else
      render :new
    end
  end

  private
    def post_params
      params.require(:post).permit(:image_url, :user_id)
    end

end
