require 'rails_helper'

RSpec.describe "Api::V1::Projects", type: :request do
  # Rack-Test helper methods like get, post, etc
  include Rack::Test::Methods

  let!(:projects) { FactoryBot.create_list(:project, 42) }

  describe "GET /index" do
    context 'without params' do
      it 'returns 200 and status ok' do
        header 'Content-Type', 'application/json'
        get "/api/v1/projects"

        expect(last_response.status).to eq(200)
      end
      it 'returns a list of projects paginated by default' do
        header 'Content-Type', 'application/json'
        get "/api/v1/projects"

        expected_number_of_projects = Project.all.count
        expect(parsed_body['data'].count).to eq(20)
      end
      it 'returns a list of projects with expected fields and attributes' do
        header 'Content-Type', 'application/json'
        get "/api/v1/projects"
        expected_fields = ["id", "type", "attributes"]
        expected_attributes = [
          "project_number",
          "project_name",
          "lead_organization",
          "organization_type",
          "who_is_involved",
          "project_org_url",
          "has_project_partners",
          "partner_name",
          "start_year",
          "end_year",
          "country",
          "country_code",
          "size_of_project_ha",
          "trees_planted_number",
          "has_explicit_location",
          "forest_type",
          "primary_objective_purpose",
          "approach",
          "identify_deforestation_driver",
          "fire_prevention",
          "has_justification_for_approach",
          "addresses_known_threats",
          "discloses_species_used",
          "use_native_species",
          "use_exotic_species",
          "local_seedling_nurseries",
          "financial_model",
          "name_org_donor",
          "has_public_reports",
          "follow_up_disclosed",
          "type_of_follow_up",
          "has_community_involvement",
          "has_gender_component",
          "scientific_research_associated_with_project",
          "news_articles_associated_with_project",
          "comment",
          "percentages"
        ]
        expect(parsed_body['data'].first.keys).to match_array(expected_fields)
        expect(parsed_body['data'].first['attributes'].keys).to match_array(expected_attributes)
      end
      it 'returns a meta object' do
        header 'Content-Type', 'application/json'
        get "/api/v1/projects"

        expected_fields = [
          'projects_total',
          'projects_matching_query',
          'pages',
          'current_page',
          'to',
          'from'
        ]

        expect(parsed_body['meta'].keys).to match_array(expected_fields)
      end        
    end
    context 'pagination' do
      it 'accepts number of elements per page' do
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?page_size=3"

        expect(parsed_body['data'].count).to eq(3)  
      end
      it 'accepts page number' do
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?page_number=2"

        expect(parsed_body['meta']['from']).to eq(21)
        expect(parsed_body['meta']['to']).to eq(40)
      end
      it 'overflows to the empty page' do
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?page_number=5"

        expect(parsed_body['data'].count).to eq(0)
      end
    end
  end
end
