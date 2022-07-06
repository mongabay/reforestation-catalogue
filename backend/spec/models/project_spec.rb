require 'rails_helper'

RSpec.describe Project, type: :model do
  context 'when approved' do
    before(:each) do
      @approved_project = FactoryBot.create(:project, approved: true)
      @project_link = FactoryBot.create(:project_link, project: @approved_project)
      @project_contact = FactoryBot.create(:project_contact, project: @approved_project)
      @pending_project1 = FactoryBot.create(:project, approved: false, previous_version_id: @approved_project.id)
      @pending_project_link = FactoryBot.create(:project_link, project: @pending_project1)
      @pending_project_contact = FactoryBot.create(:project_contact, project: @pending_project1)
      @pending_project2 = FactoryBot.create(:project, approved: false, previous_version_id: @approved_project.id)
    end

    it 'saves new version as approved' do
      @pending_project1.update(approved: true)
      expect(@pending_project1).to be_approved
    end

    it 'links other new versions to a new previous version' do
      @pending_project1.update(approved: true)
      expect(@pending_project2.reload.previous_version_id).to eq(@pending_project1.id)
    end

    it 'destroys old version' do
      @pending_project1.update(approved: true)
      expect { @approved_project.reload }.to raise_error(ActiveRecord::RecordNotFound)
    end

    it 'keeps previous links in the new version' do
      approved_project_links = @approved_project.project_links
      @pending_project1.update(approved: true)

      expect(@pending_project1.project_links.pluck(:id)).to match_array([@project_link.id, @pending_project_link.id])
    end

    it 'keeps previous contacts in the new version' do
      approved_project_contacts = @approved_project.project_contacts
      @pending_project1.update(approved: true)

      expect(@pending_project1.project_contacts.pluck(:id)).to match_array([@project_contact.id, @pending_project_contact.id])
    end
  end
end
