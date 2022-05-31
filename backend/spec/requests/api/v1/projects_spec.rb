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

        expect(parsed_body['data'].count).to eq(20)
      end
      it 'returns a list of projects sorted by context percentage desc by default' do
        project_first = Project.first
        project_last = Project.last
        category = FactoryBot.create(:category)
        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 100)
        project_category_second = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 99)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects"

        expect(parsed_body['data'][0]['id'].to_i).to eq(project_first.id)
        expect(parsed_body['data'][1]['id'].to_i).to eq(project_last.id)
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
          "percentages",
          "approved",
          "highlighted"
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
    context 'sort' do
      it 'returns a list of projects sorted by category percentage desc' do
        project_first = Project.first
        project_last = Project.last
        category = FactoryBot.create(:category)
        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 100)
        project_category_second = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 99)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?sort_by=context&order=desc"

        expect(parsed_body['data'][0]['id'].to_i).to eq(project_first.id)
        expect(parsed_body['data'][1]['id'].to_i).to eq(project_last.id)
      end
      it 'returns a list of projects sorted by category percentage asc' do
        project_first = Project.first
        project_last = Project.last
        category = FactoryBot.create(:category, slug: 'context')
        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?sort_by=context&order=asc"

        expect(parsed_body['data'][0]['id'].to_i).to eq(project_first.id)
        expect(parsed_body['data'][1]['id'].to_i).to eq(project_last.id)
      end
    end
    context 'filter' do
      it 'returns a list of projects filtered by highlighted' do
        project_first = Project.first
        project_first.highlighted = true
        project_first.save!
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?highlighted=true"

        expect(parsed_body['data'].count).to eq(1)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id])
      end
      it 'returns a list of projects filtered by start year greater or equal' do
        category = FactoryBot.create(:category, slug: 'context')
        filter = FactoryBot.create(:filter, category: category, slug: 'start_year')
        project_first = Project.first
        project_first.start_year = 2012
        project_first.save!
        project_second = Project.all[1]
        project_second.start_year = 2013
        project_second.save!
        project_last = Project.last
        project_last.start_year = 2017
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?start_year=2013"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_last.id, project_second.id])
      end
      it 'returns a list of projects filtered by end year less or equal' do
        category = FactoryBot.create(:category, slug: 'context')
        filter = FactoryBot.create(:filter, category: category, slug: 'end_year')
        project_first = Project.first
        project_first.end_year = 2012
        project_first.save!
        project_second = Project.all[1]
        project_second.end_year = 2013
        project_second.save!
        project_last = Project.last
        project_last.end_year = 2017
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?end_year=2013"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_second.id])
      end
      it 'returns a list of projects filtered by size_of_project_ha greater or equal' do
        category = FactoryBot.create(:category, slug: 'context')
        filter = FactoryBot.create(:filter, category: category, slug: 'size_of_project_ha')
        project_first = Project.first
        project_first.size_of_project_ha = 20
        project_first.save!
        project_second = Project.all[1]
        project_second.size_of_project_ha = 13
        project_second.save!
        project_last = Project.last
        project_last.size_of_project_ha = 17
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?size_of_project_ha=17"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by has_explicit_location equal' do
        category = FactoryBot.create(:category, slug: 'context')
        filter = FactoryBot.create(:filter, category: category, slug: 'has_explicit_location')
        project_first = Project.first
        project_first.has_explicit_location = true
        project_first.save!
        project_second = Project.all[1]
        project_second.has_explicit_location = false
        project_second.save!
        project_last = Project.last
        project_last.has_explicit_location = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?has_explicit_location=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by fire_prevention equal' do
        category = FactoryBot.create(:category, slug: 'ecological')
        filter = FactoryBot.create(:filter, category: category, slug: 'fire_prevention')
        project_first = Project.first
        project_first.fire_prevention = true
        project_first.save!
        project_second = Project.all[1]
        project_second.fire_prevention = false
        project_second.save!
        project_last = Project.last
        project_last.fire_prevention = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?fire_prevention=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by addresses_known_threats equal' do
        category = FactoryBot.create(:category, slug: 'ecological')
        filter = FactoryBot.create(:filter, category: category, slug: 'addresses_known_threats')
        project_first = Project.first
        project_first.addresses_known_threats = true
        project_first.save!
        project_second = Project.all[1]
        project_second.addresses_known_threats = false
        project_second.save!
        project_last = Project.last
        project_last.addresses_known_threats = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?addresses_known_threats=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by discloses_species_used equal' do
        category = FactoryBot.create(:category, slug: 'ecological')
        filter = FactoryBot.create(:filter, category: category, slug: 'discloses_species_used')
        project_first = Project.first
        project_first.discloses_species_used = true
        project_first.save!
        project_second = Project.all[1]
        project_second.discloses_species_used = false
        project_second.save!
        project_last = Project.last
        project_last.discloses_species_used = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?discloses_species_used=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by identify_deforestation_driver equal' do
        category = FactoryBot.create(:category, slug: 'economic')
        filter = FactoryBot.create(:filter, category: category, slug: 'identify_deforestation_driver')
        project_first = Project.first
        project_first.identify_deforestation_driver = true
        project_first.save!
        project_second = Project.all[1]
        project_second.identify_deforestation_driver = false
        project_second.save!
        project_last = Project.last
        project_last.identify_deforestation_driver = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?identify_deforestation_driver=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by local_seedling_nurseries equal' do
        category = FactoryBot.create(:category, slug: 'economic')
        filter = FactoryBot.create(:filter, category: category, slug: 'local_seedling_nurseries')
        project_first = Project.first
        project_first.local_seedling_nurseries = true
        project_first.save!
        project_second = Project.all[1]
        project_second.local_seedling_nurseries = false
        project_second.save!
        project_last = Project.last
        project_last.local_seedling_nurseries = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?local_seedling_nurseries=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by follow_up_disclosed equal' do
        category = FactoryBot.create(:category, slug: 'economic')
        filter = FactoryBot.create(:filter, category: category, slug: 'follow_up_disclosed')
        project_first = Project.first
        project_first.follow_up_disclosed = true
        project_first.save!
        project_second = Project.all[1]
        project_second.follow_up_disclosed = false
        project_second.save!
        project_last = Project.last
        project_last.follow_up_disclosed = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?follow_up_disclosed=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by scientific_research_associated_with_project equal' do
        category = FactoryBot.create(:category, slug: 'institutional')
        filter = FactoryBot.create(:filter, category: category, slug: 'scientific_research_associated_with_project')
        project_first = Project.first
        project_first.scientific_research_associated_with_project = true
        project_first.save!
        project_second = Project.all[1]
        project_second.scientific_research_associated_with_project = false
        project_second.save!
        project_last = Project.last
        project_last.scientific_research_associated_with_project = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?scientific_research_associated_with_project=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by has_gender_component equal' do
        category = FactoryBot.create(:category, slug: 'social')
        filter = FactoryBot.create(:filter, category: category, slug: 'has_gender_component')
        project_first = Project.first
        project_first.has_gender_component = true
        project_first.save!
        project_second = Project.all[1]
        project_second.has_gender_component = false
        project_second.save!
        project_last = Project.last
        project_last.has_gender_component = true
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?has_gender_component=true"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by forest_type equal' do
        category = FactoryBot.create(:category, slug: 'ecological')
        filter = FactoryBot.create(:filter, category: category, slug: 'forest_type')
        project_first = Project.first
        project_first.forest_type = ['boreal_mountain_system']
        project_first.save!
        project_second = Project.all[1]
        project_second.forest_type = ['subtropical_dry_forest']
        project_second.save!
        project_last = Project.last
        project_last.forest_type = ['boreal_mountain_system']
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?forest_type=boreal_mountain_system"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by financial_model equal' do
        category = FactoryBot.create(:category, slug: 'ecological')
        filter = FactoryBot.create(:filter, category: category, slug: 'financial_model')
        project_first = Project.first
        project_first.financial_model = ['business_partners']
        project_first.save!
        project_second = Project.all[1]
        project_second.financial_model = ['charity_organization']
        project_second.save!
        project_last = Project.last
        project_last.financial_model = ['business_partners']
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?financial_model=business_partners"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of projects filtered by organization_type equal' do
        category = FactoryBot.create(:category, slug: 'economic')
        filter = FactoryBot.create(:filter, category: category, slug: 'organization_type')
        project_first = Project.first
        project_first.organization_type = 'company'
        project_first.save!
        project_second = Project.all[1]
        project_second.organization_type = 'charity_organization'
        project_second.save!
        project_last = Project.last
        project_last.organization_type = 'company'
        project_last.save!

        project_category_first = FactoryBot.create(:project_category, project: project_first, category: category, percentage: 0)
        project_category_second = FactoryBot.create(:project_category, project: project_second, category: category, percentage: 1)
        project_category_last = FactoryBot.create(:project_category, project: project_last, category: category, percentage: 1)
        
        header 'Content-Type', 'application/json'
        get "/api/v1/projects?organization_type=company"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
    end
    context 'search' do
      it 'returns a list of project with partial matching project_name' do
        project_first = Project.first
        project_first.project_name = 'company x'
        project_first.save!
        project_second = Project.all[1]
        project_second.project_name = 'charity y'
        project_second.save!
        project_last = Project.last
        project_last.project_name = 'company y'
        project_last.save!

        header 'Content-Type', 'application/json'
        get "/api/v1/projects?search=company"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
      it 'returns a list of project with partial matching project_name or lead_organization' do
        project_first = Project.first
        project_first.project_name = 'duck x'
        project_first.save!
        project_second = Project.all[1]
        project_second.project_name = 'charity x'
        project_second.save!
        project_last = Project.last
        project_last.project_name = 'charity y'
        project_last.lead_organization = 'DUCK y'
        project_last.save!

        header 'Content-Type', 'application/json'
        get "/api/v1/projects?search=duck"

        expect(parsed_body['data'].count).to eq(2)
        expect(parsed_body['data'].map{ |project| project['id'].to_i }).to match_array([project_first.id, project_last.id])
      end
    end
  end
end
