class Api::RelationshipsController < ApplicationController
  before_action :logged_in?

  def create
    @user = User.find_by(username: params[:username])
    # user = User.find(params[:followed_id])
    current_user.follow(@user)
    render "api/users/show"
  end

  def destroy
    @user = User.find_by(username: params[:username])
    current_user.unfollow(@user)
    render "api/users/show"
  end
end
