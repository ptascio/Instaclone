class Api::LikesController < ApplicationController

  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(
      user_id: current_user.id,
      post_id: like_params[:post_id]
    )

    if (@like.save)
      render "api/likes/show", status: 200
    else
      @errors = like.errors.full_messages
      #fix this! need an api/shared/error or similar
      render "api/likes/show", status: 422
    end
  end

  def destroy

    @like = Like.find_by(
      user_id: current_user.id,
      post_id: self.params["id"].to_i
    )
  

    if(@like.destroy)
      render "api/likes/show", status: 200
    else
      @errors = like.errors.full_messages
      render "api/likes/show"
    end
  end

  private
    def like_params
      params.require(:like).permit(:post_id)
    end

end
