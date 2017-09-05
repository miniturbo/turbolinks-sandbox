Rails.application.routes.draw do
  root 'root#index'
  get 'page1', to: 'root#page1'
  get 'page2', to: 'root#page2'
end
