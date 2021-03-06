# config valid for current version and patch releases of Capistrano
lock "~> 3.17.0"

require 'capistrano-db-tasks'

set :application, 'reforestation-catalogue-backend'
set :repo_url, 'git@github.com:mongabay/reforestation-catalogue.git'
set :repo_tree, 'backend'
set :deploy_to, '/home/deploy_user/reforestation-catalogue-backend'

set :linked_files, %w{config/database.yml config/master.key}
set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

set :keep_releases, 3
set :keep_assets, 3

set :db_local_clean, true
set :db_remote_clean, true

set :init_system, :systemd

set :passenger_restart_with_sudo, true

set :rbenv_map_bins, %w{rake gem bundle ruby rails}
set :rbenv_type, :user
set :rbenv_ruby, '3.0.0'
