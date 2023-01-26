require 'rails_helper'

RSpec.describe 'Api::V1::Projects', type: :request do
  describe 'Update project' do
    before(:each) do
      @project = FactoryBot.create(:project, approved: true, start_year: 2020, end_year: 2022)
      @project_link = FactoryBot.create(:project_link, project: @project)
    end

    let(:headers) { { 'ACCEPT' => 'application/json' } }
    let(:update_params) {
      {
        project: {
          'start_year' => 2021,
          project_links_attributes: [{url: @project_link.url, title: 'test', description: 'test'}]
        }
      }
    }

    context "when updating approved project" do
      it 'does not update approved project' do
        put "/api/v1/projects/#{@project.id}", params: update_params, headers: headers
        expect(@project.start_year).to eq(2020)
      end

      it 'creates a new version of approved project' do
        put "/api/v1/projects/#{@project.id}", params: update_params
        new_version = Project.find_by_previous_version_id(@project.id)
        expect(new_version).not_to be_nil
      end

      it 'creates a new version of project link' do
        put "/api/v1/projects/#{@project.id}", params: update_params
        new_version = ProjectLink.find_by_previous_version_id(@project_link.id)
        expect(new_version).not_to be_nil
      end

      it 'saves new version as pending' do
        put "/api/v1/projects/#{@project.id}", params: update_params
        new_version = Project.find_by_previous_version_id(@project.id)
        expect(new_version.approved).to be false
      end

      it 'applies updates to new version' do
        put "/api/v1/projects/#{@project.id}", params: update_params
        new_version = Project.find_by_previous_version_id(@project.id)
        expect(new_version.start_year).to eq(2021)
      end
    end
  end
end
