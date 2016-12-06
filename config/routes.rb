Rails.application.routes.draw do
  # namespace :api, default: { format: json } do
  #   resources :users, only: [:create, :show]
  # end
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
  end
end
