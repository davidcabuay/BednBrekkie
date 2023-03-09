Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :listings, only: [:index, :create, :show]
    resources :reservations, except: [:edit, :new]
    resources :reviews, except: [:edit, :new]
  end
  
  get '*path', to: "static_pages#frontend_index"
  # Defines the root path route ("/")
  # root "articles#index"
end
