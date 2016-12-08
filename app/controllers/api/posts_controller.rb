class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def new
    @post = Post.new(post_params)
    render :new
  end

  def create
    #current_user
    @post = Post.new(post_params)
    render :show
    # if @post.save
    #   redirect_to post_url(@post.id)
    # else
    #   render :new
    # end
  end

  private
    def post_params
      params.require(:post).permit(:image, :user_id)
    end

end
