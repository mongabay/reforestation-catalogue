class ProjectContact < ApplicationRecord
  belongs_to :project

  delegate :project_name, to: :project, allow_nil: true
end
