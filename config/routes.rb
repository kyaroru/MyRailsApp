Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'cover#index'
  get 'profile', to: 'profile#index'
  get 'about', to: 'about#index'
  get 'apps', to: 'apps#index'
end
