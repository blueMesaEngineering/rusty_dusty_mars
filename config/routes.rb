Rails.application.routes.draw do
  scope '/api' do
    resources :datapoints
  end
end
