Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

  resources :animals
  resources :bookings
  resources :clients

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
end
end
