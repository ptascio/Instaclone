class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render "api/users/index"
  end

  def create
    @user = User.create(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 400
      end
    else
      render json: "No User Found", status: 404
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    @posts = @user.posts
  end

  def following
    @user = User.find_by(username: params[:username])
    @users = @user.following
    render "api/users/following"
  end

  def followers
    @user = User.find_by(username: params[:username])
    @followers = @user.followers
    render "api/users/followers"
  end

  def search
   if params[:query]["body"].length > 0
     @users = User.where("username ~ ?", params[:query]["body"])
   else
     @users = User.none
   end

    render "api/users/search"
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password, :image)
    end
end
