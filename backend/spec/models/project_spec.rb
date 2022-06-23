require 'rails_helper'

RSpec.describe Project, type: :model do
  context 'when approved' do
    before(:each) do
      @approved_project = FactoryBot.create(:project, approved: true)
      @pending_project1 = FactoryBot.create(:project, approved: false, previous_version_id: @approved_project.id)
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
  end
end
