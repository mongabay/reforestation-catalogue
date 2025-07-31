require "rails_helper"

RSpec.describe Api::V1::OrganizationsController, type: :request do
  let!(:organization1) { create(:organization, name: "Test Org 1", country_hq: "USA", permanence: 0.5, ecological: 0.7) }
  let!(:organization2) { create(:organization, name: "Test Org 2", country_hq: "Canada", permanence: 0.8, ecological: 0.6) }
  let!(:organization3) { create(:organization, name: "Another Org", country_hq: "UK", permanence: 0.3, ecological: 0.9) }

  describe "GET /api/v1/organizations" do
    it "returns all organizations" do
      get "/api/v1/organizations"

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"].length).to eq(3)
      expect(json_response["meta"]["organizations_total"]).to eq(3)
    end

    it "supports pagination" do
      get "/api/v1/organizations", params: {page_number: 1, page_size: 2}

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"].length).to eq(2)
      expect(json_response["meta"]["current_page"]).to eq(1)
    end

    it "supports sorting by permanence" do
      get "/api/v1/organizations", params: {sort_by: "permanence", order: "desc"}

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      # Should be sorted by permanence descending
      permanence_values = json_response["data"].map { |org| org["attributes"]["permanence"] }
      expect(permanence_values).to eq([0.8, 0.5, 0.3])
    end

    it "supports sorting by name" do
      get "/api/v1/organizations", params: {sort_by: "name", order: "asc"}

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      names = json_response["data"].map { |org| org["attributes"]["name"] }
      expect(names).to eq(["Another Org", "Test Org 1", "Test Org 2"])
    end

    it "supports filtering by country" do
      get "/api/v1/organizations", params: {country_hq: "USA"}

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"].length).to eq(1)
      expect(json_response["data"].first["attributes"]["country_hq"]).to eq("USA")
    end

    it "supports filtering by permanence score" do
      get "/api/v1/organizations", params: {permanence: 0.4}

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"].length).to eq(2) # orgs with permanence >= 0.4
      permanence_values = json_response["data"].map { |org| org["attributes"]["permanence"] }
      expect(permanence_values.all? { |v| v >= 0.4 }).to be true
    end

    it "supports search functionality" do
      get "/api/v1/organizations", params: {search: "Test"}

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"].length).to eq(2)
      names = json_response["data"].map { |org| org["attributes"]["name"] }
      expect(names).to include("Test Org 1", "Test Org 2")
    end

    it "supports filtering by carbon credits" do
      organization1.update!(carbon_credits: true)
      organization2.update!(carbon_credits: false)

      get "/api/v1/organizations", params: {carbon_credits: true}

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"].length).to eq(1)
      expect(json_response["data"].first["attributes"]["carbon_credits"]).to be true
    end
  end

  describe "GET /api/v1/organizations/:id" do
    it "returns a specific organization" do
      get "/api/v1/organizations/#{organization1.id}"

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"]["attributes"]["name"]).to eq("Test Org 1")
      expect(json_response["data"]["attributes"]["country_hq"]).to eq("USA")
    end

    it "returns 404 for non-existent organization" do
      get "/api/v1/organizations/999999"

      expect(response).to have_http_status(:not_found)
    end
  end

  describe "POST /api/v1/organizations" do
    let(:valid_params) do
      {
        organization: {
          name: "New Organization",
          country_hq: "Germany",
          org_type: "Nongovernmental organization (NGO)",
          permanence: 0.6,
          ecological: 0.8,
          social: 0.7,
          financial: 0.5
        }
      }
    end

    it "creates a new organization" do
      expect {
        post "/api/v1/organizations", params: valid_params
      }.to change(Organization, :count).by(1)

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"]["attributes"]["name"]).to eq("New Organization")
      expect(json_response["data"]["attributes"]["country_hq"]).to eq("Germany")
    end

    it "returns errors for invalid params" do
      invalid_params = {organization: {name: ""}}

      post "/api/v1/organizations", params: invalid_params

      expect(response).to have_http_status(:unprocessable_entity)
      json_response = JSON.parse(response.body)
      expect(json_response["errors"]).to be_present
    end
  end

  describe "PUT /api/v1/organizations/:id" do
    let(:update_params) do
      {
        organization: {
          name: "Updated Organization Name",
          permanence: 0.9
        }
      }
    end

    it "updates an organization" do
      put "/api/v1/organizations/#{organization1.id}", params: update_params

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["data"]["attributes"]["name"]).to eq("Updated Organization Name")
      expect(json_response["data"]["attributes"]["permanence"]).to eq(0.9)
    end

    it "returns errors for invalid updates" do
      invalid_params = {organization: {name: ""}}

      put "/api/v1/organizations/#{organization1.id}", params: invalid_params

      expect(response).to have_http_status(:unprocessable_entity)
      json_response = JSON.parse(response.body)
      expect(json_response["errors"]).to be_present
    end
  end
end
