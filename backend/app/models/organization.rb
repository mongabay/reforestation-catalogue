class Organization < ApplicationRecord
  # Array fields that will be displayed as text areas in the admin
  ARRAY_FIELDS = [:ribbons, :program_names, :goals_class, :targets, :tree_growing_methods,
    :geographylist, :funding, :forms_of_intermediary_support, :applied_standards,
    :dashboards_and_apps].freeze

  # Organization type enum (matching the Project model)
  enum org_type: {
    "Nongovernmental organization (NGO)" => 20,
    "Community-based organization (CBO)" => 21,
    "Private Sector" => 22,
    "Intergovernmental organization (IGO)" => 23,
    "Government" => 6,
    "University / Academic institution" => 18
  }

  # Validation
  validates :name, presence: true
  validates :org_type, presence: true
  validates :year_founded, numericality: {greater_than: 1800, less_than_or_equal_to: Date.current.year}, allow_blank: true

  # Helper methods for array fields display in forms
  ARRAY_FIELDS.each do |field|
    define_method "#{field}_text" do
      self[field]&.join("\n")
    end

    define_method "#{field}_text=" do |value|
      self[field] = value.to_s.split("\n").map(&:strip).reject(&:blank?)
    end
  end

  # Scopes
  scope :by_type, ->(type) { where(org_type: type) if type.present? }
  scope :by_country, ->(country) { where(country_hq: country) if country.present? }
  scope :with_carbon_credits, -> { where(carbon_credits: true) }

  def display_name
    name.presence || "Organization ##{id}"
  end

  def impact_summary
    parts = []
    parts << "#{estimated_impact_trees.to_i} trees" if estimated_impact_trees&.positive?
    parts << "#{estimated_impact_hectares} hectares" if estimated_impact_hectares&.positive?
    parts.join(", ").presence || "No impact data"
  end
end
