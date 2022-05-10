Rails.application.routes.draw do
  resources :plant_categories
  resources :waterings
  resources :plants
  resources :users
  resources :sessions, only: [:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
