Rails.application.routes.draw do
  resources :plant_categories
  resources :waterings
  resources :plants
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
