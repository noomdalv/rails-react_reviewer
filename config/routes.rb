Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :products, param: :slug
      resources :reviews, only [:create, :destroy]
    end
  end

  get 'xpath' to: 'pages#index', via: :all
end