Rails.application.routes.draw do
  resources :plant_categories, only: [:index, :show]
  resources :waterings 
  resources :plants, only:[:create, :update, :show, :index, :destroy]
  resources :users, only: [:create, :show, :index]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # delete '/plants/:id', to: 'plants#delete_plant'

  get '/plants/:id/waterings', to: 'plants#show_waterings'
  get '/users/:id/plants', to: 'users#show_plants'
  
  # Defines the root path route ("/")
  # root "articles#index"
end
