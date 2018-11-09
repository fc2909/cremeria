Rails.application.routes.draw do
  root 'application#menu'
  
  #get 'log_in' => 'sessions#new'
  get 'log_in' => 'sessions#create'
  delete 'log_out' => 'sessions#destroy'
  get 'index' => 'application#menu'
  get 'singup' => 'application#loggin'


  resources :usuarios
  resources :rutas
  resources :notase
  resources :clientes
  resources :mantenimiento
  resources :bitacoras
  resources :reportes
  resources :empleados
  resources :ventadiaria
  resources :m_vehicular
  resources :logistica
  resources :reportes
  resources :categorias
  resources :remision
  resources :permisos
  resources :bitacoras
  resources :t_nomina
  resources :t_venta
  resources :columnas
  resources :logs
  resources :pagares
  resources :talleres
  resources :ventaspasada
  resources :historiales_inventarios
  resources :inventarios do
    collection do
      post 'agregar'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
