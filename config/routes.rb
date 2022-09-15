Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:show, :index] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create, :update, :destroy]
    resources :cart_items, only: [:index, :create, :update, :destroy]
  end
  

  get '*path', to: "static_pages#frontend_index", constraints: ->(req) {
    req.path.exclude? 'rails/active_storage'
  }
  # post 'api/test', to: 'application#test'
  # get '*path', to: "static_pages#frontend_index" #must be @bottom!
end
