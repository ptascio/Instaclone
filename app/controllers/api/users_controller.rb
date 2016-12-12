class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    @posts = @user.posts
  end

  def following
    @user = User.find(params[:id])
    @users = @user.following
    render "api/users/following"
  end

  def followers
    @user = User.find(params[:id])
    @followers = @user.followers
    render "api/users/followers"
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
