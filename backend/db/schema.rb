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

ActiveRecord::Schema[7.0].define(version: 2022_06_22_115109) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "slug"
    t.string "label"
    t.string "tooltip_description"
    t.string "form_description"
    t.string "step_by_step_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "filters", force: :cascade do |t|
    t.string "slug"
    t.string "label"
    t.integer "data_type"
    t.integer "query_mode"
    t.boolean "hide"
    t.integer "enum_id"
    t.integer "form_order"
    t.integer "filter_group_order"
    t.boolean "form_required"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "category_id"
    t.index ["category_id"], name: "index_filters_on_category_id"
  end

  create_table "project_categories", force: :cascade do |t|
    t.bigint "project_id"
    t.bigint "category_id"
    t.float "percentage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_project_categories_on_category_id"
    t.index ["project_id"], name: "index_project_categories_on_project_id"
  end

  create_table "project_contacts", force: :cascade do |t|
    t.bigint "project_id"
    t.string "email"
    t.string "name"
    t.string "company"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_contacts_on_project_id"
  end

  create_table "project_links", force: :cascade do |t|
    t.bigint "project_id"
    t.string "title"
    t.text "description"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_links_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.integer "project_number"
    t.string "project_name"
    t.string "lead_organization"
    t.string "organization_type_tmp"
    t.string "who_is_involved_tmp"
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
    t.string "forest_type_tmp"
    t.string "primary_objective_purpose_tmp"
    t.string "approach_tmp"
    t.boolean "identify_deforestation_driver"
    t.boolean "fire_prevention"
    t.boolean "has_justification_for_approach"
    t.boolean "addresses_known_threats"
    t.boolean "discloses_species_used"
    t.boolean "use_native_species"
    t.boolean "use_exotic_species"
    t.boolean "local_seedling_nurseries"
    t.string "financial_model_tmp"
    t.string "name_org_donor"
    t.boolean "has_public_reports"
    t.boolean "follow_up_disclosed"
    t.string "type_of_follow_up_tmp"
    t.boolean "has_community_involvement"
    t.boolean "has_gender_component"
    t.boolean "scientific_research_associated_with_project"
    t.boolean "news_articles_associated_with_project"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "highlighted", default: false
    t.boolean "approved", default: false
    t.integer "organization_type"
    t.integer "who_is_involved", default: [], array: true
    t.integer "forest_type", default: [], array: true
    t.integer "primary_objective_purpose", default: [], array: true
    t.integer "approach", default: [], array: true
    t.integer "financial_model", default: [], array: true
    t.integer "type_of_follow_up", default: [], array: true
    t.bigint "previous_version_id"
    t.index ["previous_version_id"], name: "index_projects_on_previous_version_id"
  end

  create_table "static_pages", force: :cascade do |t|
    t.string "slug"
    t.string "title"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "remember_token"
    t.datetime "remember_token_expires_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "filters", "categories"
  add_foreign_key "projects", "projects", column: "previous_version_id"
end
