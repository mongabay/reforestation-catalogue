server '54.237.188.71', user: 'deploy_user', roles: %w{web app db}
set :rails_env, 'staging'
set :branch, 'develop'
