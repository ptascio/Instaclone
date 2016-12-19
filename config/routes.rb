Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, param: :username, only: [:create, :show] do
      member do
        get :following, :followers
      end
    end
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :show, :new, :create, :destroy]
    resources :comments, only: [:show, :create, :destroy, :index]
    resources :relationships, param: :username, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy, :index]
  end
end
