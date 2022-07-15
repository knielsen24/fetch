Rails.application.routes.draw do
  resources :users

  post "/", to: "users#create"
  get "/me", to: "users#show"
  patch "/users/:id", to: "users#update"
  delete "/users/:id", to: "users#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/findjobs", to: "job_postings#index"

  get "/users/:id/applications", to: "applied_tos#index"
  post "/applied_tos", to: "applied_tos#create"

  get "/companies/:id", to: "companies#show"

  post "/searchjobs", to: "search#index"

  delete "/profile/deletejob/:id", to: "applied_tos#delete"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
