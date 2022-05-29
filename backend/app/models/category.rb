class Category < ApplicationRecord
  has_many :filters
  has_many :project_categories
  has_many :projects, :through => :project_categories
  has_many :project_categories_desc, -> { order_by_percentage_desc}, :class_name => 'ProjectCategory'
  has_many :projects_desc, :source => :project, :through => :project_categories_desc
  has_many :project_categories_asc, -> { order_by_percentage_asc}, :class_name => 'ProjectCategory'
  has_many :projects_asc, :source => :project, :through => :project_categories_asc
end
