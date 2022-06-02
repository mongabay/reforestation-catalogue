server '52.71.145.103', user: 'deploy_user', roles: %w{web app db}
set :rails_env, 'production'
set :branch, 'main'
