class Api::CommentsController < ApplicationController
  before_action :logged_in?

  def create
    @comment = current_user.comments.new(comment_params)
    debugger
    if @comment.save
      render "api/comments/show"
    end
  end

  def destroy
  end

  def show
    post = Post.find(params[:id])
    @comments = post.comments.all
  end

  private
    def comment_params
      params.require(:comment).permit(:body)
    end

end
