class CommentsController < ApplicationController
  before_action :logged_in?

  def create
  end

  def destroy
  end

  def show
    post = Post.find(params[:id])
    @comments = post.comments.all 
  end

end
