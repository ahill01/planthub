Rails.application.routes.draw do
  resources :plant_categories, only: [:index, :show]
  resources :waterings, only: [:create, :destroy]
  resources :plants
  resources :users, only: [:create, :show, :index]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # get '/logged_in', to: 'sessions#is_logged_in?'
 

  get '/plants/:id/waterings', to: 'plants#show_waterings'
  get '/users/:id/plants', to: 'users#show_plants'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
