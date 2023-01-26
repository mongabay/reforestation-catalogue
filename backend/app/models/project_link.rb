class ProjectLink < ApplicationRecord
  belongs_to :project
  belongs_to :previous_version, optional: true, class_name: 'ProjectLink'

  delegate :project_name, to: :project, allow_nil: true
  delegate :approved?, to: :project, allow_nil: true

  def updated_from_previous_version?
    previous_version.present? && (
      title != previous_version.title || description != previous_version.description
    )
  end
end
