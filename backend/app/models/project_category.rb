class ProjectCategory < ApplicationRecord
  belongs_to :project
  belongs_to :category

  scope :order_by_percentage_desc, -> { order(percentage: :desc) }

  scope :order_by_percentage_asc, -> { order(percentage: :asc) }
end
