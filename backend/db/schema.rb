# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_26_144152) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.integer "project_number"
    t.string "project_name"
    t.string "lead_organization"
    t.string "organization_type"
    t.string "who_is_involved"
    t.string "project_org_url"
    t.boolean "has_project_partners"
    t.string "partner_name"
    t.integer "start_year"
    t.integer "end_year"
    t.string "country"
    t.string "country_code"
    t.float "size_of_project_ha"
    t.integer "trees_planted_number"
    t.boolean "has_explicit_location"
    t.string "forest_type"
    t.string "primary_objective_purpose"
    t.string "approach"
    t.boolean "identify_deforestation_driver"
    t.boolean "fire_prevention"
    t.boolean "has_justification_for_approach"
    t.boolean "addresses_known_threats"
    t.boolean "discloses_species_used"
    t.boolean "use_native_species"
    t.boolean "use_exotic_species"
    t.boolean "local_seedling_nurseries"
    t.string "financial_model"
    t.string "name_org_donor"
    t.boolean "has_public_reports"
    t.boolean "follow_up_disclosed"
    t.string "type_of_follow_up"
    t.boolean "has_community_involvement"
    t.boolean "has_gender_component"
    t.boolean "scientific_research_associated_with_project"
    t.boolean "news_articles_associated_with_project"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end