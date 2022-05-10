Rails.application.routes.draw do
  resources :plant_categories, only: [:index, :show]
  resources :waterings, only: [:create]
  resources :plants
  resources :users
  resources :sessions, only: [:create, :destroy]

  get '/plants/:id/waterings', to: 'plants#show_waterings'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
