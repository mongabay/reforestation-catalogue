Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, format: "json" do
    namespace :v1 do
      get 'health/check'
      get 'categories' => 'categories#index'
      get 'projects' => 'projects#index'
      get 'projects/:id' => 'projects#show'
      post 'projects' => 'projects#create'
      patch 'projects/:id' => 'projects#update'
      put 'projects/:id' => 'projects#update'
      get 'static_pages/:slug' => 'static_pages#show'
      get 'enums' => 'enums#index'
    end
  end
end
