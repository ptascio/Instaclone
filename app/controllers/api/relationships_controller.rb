class Api::RelationshipsController < ApplicationController
  before_action :logged_in?

  def create
    debugger
      user = User.find_by(username: params[:username])
      debugger
    # user = User.find(params[:followed_id])
    current_user.follow(user)
    render "api/users/show"
  end

  def destroy
    debugger
    user = User.find_by(username: params[:username])
    debugger

    current_user.unfollow(user)
    render "api/users/show"
  end
end
