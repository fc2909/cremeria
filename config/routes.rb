Rails.application.routes.draw do
  root 'application#menu'
  
  #get 'log_in' => 'sessions#new'
  get 'log_in' => 'sessions#create'
  delete 'log_out' => 'sessions#destroy'
  get 'index' => 'application#menu'
  get 'singup' => 'application#loggin'


  resources :usuarios
   resources :historiales_inventarios
  resources :inventarios do
    collection do
      post 'agregar'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
