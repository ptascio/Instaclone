class Api::CommentsController < ApplicationController
  before_action :logged_in?


  def index
    @comments = Comment.all
    render "api/comments/index"
  end

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.post_id = self.params["comment"]["postId"].to_i
    @comment.username = self.params["comment"]["username"]
    if @comment.save
      render "api/comments/show"
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    if current_user.id == @comment.user_id
      @comment.destroy
      render "api/comments/show"
    end
  end

  def show
    @comment = Comment.find(params[:id])
    @user = User.find(params[@comment.user_id])
  end

  private
    def comment_params
      params.require(:comment).permit(:body)
    end

end
