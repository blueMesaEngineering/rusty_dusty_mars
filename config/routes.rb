Rails.application.routes.draw do
  scope '/api' do
    resources :datapoints
    resources :piecharts
  end
end
