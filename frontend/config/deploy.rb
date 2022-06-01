# config valid for current version and patch releases of Capistrano
lock "~> 3.17.0"

set :application, "reforestation-catalogue-frontend"
set :repo_url, 'git@github.com:mongabay/reforestation-catalogue.git'
set :repo_tree, 'frontend'
set :deploy_to, '/home/deploy_user/reforestation-catalogue-frontend'
set :nvm_type, :user
set :nvm_node, 'v16.15.0'
set :nvm_map_bins, %w{node npm yarn}
set :yarn_flags, %w{--silent --no-progress}

set :keep_releases, 3

set :init_system, :systemd
set :passenger_restart_with_touch, true

append :linked_files, '.env.local'
append :linked_dirs, 'node_modules'

namespace :yarn do
  after 'yarn:install', 'yarn:build'

  task :build do
    on roles fetch(:yarn_roles) do
      within fetch(:yarn_target_path, release_path) do
        with fetch(:yarn_env_variables, {}) do
          execute :yarn, 'build'
        end
      end
    end
  end
end


after 'deploy:cleanup', :'passenger:restart'
