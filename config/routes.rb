Rails.application.routes.draw do

  root to: 'cocktails#index'

  # delete 'doses/:id', to: 'doses#destroy'
  resources :doses, only: [:destroy]

  resources :cocktails, only: [:index, :show, :new, :create] do
    resources :doses, only: [:new, :create]
  end

end
