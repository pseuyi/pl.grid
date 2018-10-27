Rails.application.routes.draw do
  namespace :api do
    resources :post, only: [:index, :create, :destroy]
  end
end
