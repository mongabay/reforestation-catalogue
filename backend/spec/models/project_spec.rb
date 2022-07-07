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

  context 'get_percentage_for_category' do
    before(:each) do
      @new_project = FactoryBot.build(:project, approved: true)
      @context_cat = FactoryBot.create(:category, slug: 'context', label: 'Context')
      @ecological_cat = FactoryBot.create(:category, slug: 'ecological', label: 'Ecological')
      @economic_cat = FactoryBot.create(:category, slug: 'economic', label: 'Economic')
      @institutional_cat = FactoryBot.create(:category, slug: 'institutional', label: 'Institutional')
      @social_cat = FactoryBot.create(:category, slug: 'social', label: 'Social')
    end
    # Context
    #
    # year
    it '+1 point when start_year is not empty' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'start_year', label: 'Start year', data_type: 'year')
      @new_project.start_year = 2022
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+0 points when start_year is nil' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'start_year', label: 'Start year', data_type: 'year')
      @new_project.start_year = nil
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(0)
    end
    it '+1 point when end_year is not empty' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'end_year', label: 'End year', data_type: 'year')
      @new_project.end_year = 2020
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+1 point when project is ongoing/end_year == 0' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'end_year', label: 'End year', data_type: 'year')
      @new_project.end_year = 0
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+0 points when project end_year is nil' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'end_year', label: 'End year', data_type: 'year')
      @new_project.end_year = 0
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    # Boolean
    it '+1 point when has_explicit_location is true' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_explicit_location', label: 'Has explicit location', data_type: 'boolean')
      @new_project.has_explicit_location = true
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+1 point when has_explicit_location is false' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_explicit_location', label: 'Has explicit location', data_type: 'boolean')
      @new_project.has_explicit_location = false
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+0 points when has_explicit_location is nil' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_explicit_location', label: 'Has explicit location', data_type: 'boolean')
      @new_project.has_explicit_location = nil
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(0)
    end
    it '+1 point when has_public_reports is true' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_public_reports', label: 'Has public reports', data_type: 'boolean')
      @new_project.has_public_reports = true
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+1 point when has_public_reports is false' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_public_reports', label: 'Has public reports', data_type: 'boolean')
      @new_project.has_public_reports = false
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+0 points when has_public_reports is nil' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_public_reports', label: 'Has public reports', data_type: 'boolean')
      @new_project.has_public_reports = nil
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(0)
    end
    it '+1 point when has_justification_for_approach is true' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_justification_for_approach', label: 'Has justification for approach', data_type: 'boolean')
      @new_project.has_justification_for_approach = true
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+1 point when has_justification_for_approach is false' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_justification_for_approach', label: 'Has justification for approach', data_type: 'boolean')
      @new_project.has_justification_for_approach = false
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+0 points when has_justification_for_approach is nil' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'has_justification_for_approach', label: 'Has justification for approach', data_type: 'boolean')
      @new_project.has_justification_for_approach = nil
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(0)
    end
    # String
    it '+1 point when country is not empty' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'country', label: 'Country', data_type: 'string')
      @new_project.country = 'Korea'
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+0 points when country is nil' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'country', label: 'Country', data_type: 'string')
      @new_project.country = nil
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(0)
    end
    # Number
    it '+1 point when size_of_project_ha is not empty' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'size_of_project_ha', label: 'Size of project in ha', data_type: 'number')
      @new_project.size_of_project_ha = 1000
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(100)
    end
    it '+0 points when size_of_project_ha is nil' do
      FactoryBot.create(:filter, category:@context_cat, slug: 'size_of_project_ha', label: 'Size of project in ha', data_type: 'number')
      @new_project.size_of_project_ha = nil
      expect(@new_project.get_percentage_for_category(@context_cat)).to eq(0)
    end
    #Ecological
    #
    #Array of Enums
    it '+1 point when forest_type is not empty' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'forest_type', label: 'Forest type', data_type: 'string')
      @new_project.forest_type = ['Boreal mountain system']
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(100)
    end
    it '+0 points when forest_type is empty' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'forest_type', label: 'Forest type', data_type: 'string')
      @new_project.forest_type = []
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(0)
    end
    it '+0 points when forest_type is nil' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'forest_type', label: 'Forest type', data_type: 'string')
      @new_project.forest_type = nil
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(0)
    end
    #Boolean
    it '+1 point when fire_prevention is true' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'fire_prevention', label: 'Fire prevention', data_type: 'boolean')
      @new_project.fire_prevention = true
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(100)
    end
    it '+1 point when fire_prevention is false' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'fire_prevention', label: 'Fire prevention', data_type: 'boolean')
      @new_project.fire_prevention = false
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(100)
    end
    it '+0 points when fire_prevention is nil' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'fire_prevention', label: 'Fire prevention', data_type: 'boolean')
      @new_project.fire_prevention = nil
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(0)
    end
    it '+1 point when addresses_known_threats is true' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'addresses_known_threats', label: 'Addresses known threats', data_type: 'boolean')
      @new_project.addresses_known_threats = true
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(100)
    end
    it '+1 point when addresses_known_threats is false' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'addresses_known_threats', label: 'Addresses known threats', data_type: 'boolean')
      @new_project.addresses_known_threats = false
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(100)
    end
    it '+0 points when addresses_known_threats is nil' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'addresses_known_threats', label: 'Addresses known threats', data_type: 'boolean')
      @new_project.addresses_known_threats = nil
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(0)
    end
    it '+1 point when discloses_species_used is true' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'discloses_species_used', label: 'Discloses species used', data_type: 'boolean')
      @new_project.discloses_species_used = true
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(100)
    end
    it '+1 point when discloses_species_used is false' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'discloses_species_used', label: 'Discloses species used', data_type: 'boolean')
      @new_project.discloses_species_used = false
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(100)
    end
    it '+0 points when discloses_species_used is nil' do
      FactoryBot.create(:filter, category:@ecological_cat, slug: 'discloses_species_used', label: 'Discloses species used', data_type: 'boolean')
      @new_project.discloses_species_used = nil
      expect(@new_project.get_percentage_for_category(@ecological_cat)).to eq(0)
    end
    # Economical
    #
    # String
    it '+1 point when name_org_donor is not empty' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'name_org_donor', label: 'Name Org/Donor', data_type: 'string')
      @new_project.name_org_donor = 'Korea'
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+0 points when name_org_donor is nil' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'name_org_donor', label: 'Name Org/Donor', data_type: 'string')
      @new_project.name_org_donor = nil
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(0)
    end
    # Boolean
    it '+1 point when identify_deforestation_driver is true' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'identify_deforestation_driver', label: 'Identifies deforestation driver', data_type: 'boolean')
      @new_project.identify_deforestation_driver = true
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+1 point when identify_deforestation_driver is false' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'identify_deforestation_driver', label: 'Identifies deforestation driver', data_type: 'boolean')
      @new_project.identify_deforestation_driver = false
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+0 points when identify_deforestation_driver is nil' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'identify_deforestation_driver', label: 'Identifies deforestation driver', data_type: 'boolean')
      @new_project.identify_deforestation_driver = nil
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(0)
    end
    it '+1 point when local_seedling_nurseries is true' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'local_seedling_nurseries', label: 'Local seedling nurseries', data_type: 'boolean')
      @new_project.local_seedling_nurseries = true
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+1 point when local_seedling_nurseries is false' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'local_seedling_nurseries', label: 'Local seedling nurseries', data_type: 'boolean')
      @new_project.local_seedling_nurseries = false
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+0 points when local_seedling_nurseries is nil' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'local_seedling_nurseries', label: 'Local seedling nurseries', data_type: 'boolean')
      @new_project.local_seedling_nurseries = nil
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(0)
    end
    it '+1 point when follow_up_disclosed is true' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'follow_up_disclosed', label: 'Follow up disclosed', data_type: 'boolean')
      @new_project.follow_up_disclosed = true
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+1 point when follow_up_disclosed is false' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'follow_up_disclosed', label: 'Follow up disclosed', data_type: 'boolean')
      @new_project.follow_up_disclosed = false
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+0 points when follow_up_disclosed is nil' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'follow_up_disclosed', label: 'Follow up disclosed', data_type: 'boolean')
      @new_project.follow_up_disclosed = nil
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(0)
    end
    #Array of Enums
    it '+1 point when financial_model is not empty' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'financial_model', label: 'Financial model', data_type: 'string')
      @new_project.financial_model = ['Business partners']
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(100)
    end
    it '+0 points when financial_model is empty' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'financial_model', label: 'Financial model', data_type: 'string')
      @new_project.financial_model = []
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(0)
    end
    it '+0 points when financial_model is nil' do
      FactoryBot.create(:filter, category:@economic_cat, slug: 'financial_model', label: 'Financial model', data_type: 'string')
      @new_project.financial_model = nil
      expect(@new_project.get_percentage_for_category(@economic_cat)).to eq(0)
    end
    # Institutional
    #
    # String
    it '+1 point when organization_type is not empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'organization_type', label: 'Organization type', data_type: 'string')
      @new_project.organization_type = 'Company'
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+0 points when organization_type is nil' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'organization_type', label: 'Organization type', data_type: 'string')
      @new_project.organization_type = nil
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(0)
    end
    # Boolean
    it '+1 point when has_project_partners is true' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      @new_project.has_project_partners = true
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+1 point when partner_name not empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'partner_name', label: 'Partner name', data_type: 'string')
      @new_project.partner_name = 'Partner test 1'
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+1 point when has_project_partners is false' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      @new_project.has_project_partners = false
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+0 points when has_project_partners is nil' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      @new_project.has_project_partners = nil
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(0)
    end
    # Boolean + String combo
    # Here is the logic: https://vizzuality.atlassian.net/browse/MP-100
    #

    it '+2 points when has_project_partners is false and partner_name empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'partner_name', label: 'Partner name', data_type: 'string')
      @new_project.partner_name = nil
      @new_project.has_project_partners = false
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+2 points when has_project_partners is false and partner_name not empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'partner_name', label: 'Partner name', data_type: 'string')
      @new_project.partner_name = 'Partner test 1'
      @new_project.has_project_partners = false
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+3 points when organization_type is not empty,has_project_partners is true and partner_name not empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'partner_name', label: 'Partner name', data_type: 'string')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'organization_type', label: 'Organization type', data_type: 'string')
      @new_project.organization_type = 'Company'
      @new_project.partner_name = 'Partner test 1'
      @new_project.has_project_partners = true
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+3 points when organization_type is not empty,has_project_partners is false and partner_name empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'partner_name', label: 'Partner name', data_type: 'string')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'organization_type', label: 'Organization type', data_type: 'string')
      @new_project.organization_type = 'Company'
      @new_project.partner_name = nil
      @new_project.has_project_partners = false
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+3 points when organization_type is not empty,has_project_partners is false and partner_name not empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'partner_name', label: 'Partner name', data_type: 'string')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'organization_type', label: 'Organization type', data_type: 'string')
      @new_project.organization_type = 'Company'
      @new_project.partner_name = 'Partner test 1'
      @new_project.has_project_partners = false
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(100)
    end
    it '+2 points when organization_type is not empty,has_project_partners is true and partner_name empty' do
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'has_project_partners', label: 'Has project partners', data_type: 'boolean')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'partner_name', label: 'Partner name', data_type: 'string')
      FactoryBot.create(:filter, category:@institutional_cat, slug: 'organization_type', label: 'Organization type', data_type: 'string')
      @new_project.organization_type = 'Company'
      @new_project.partner_name = nil
      @new_project.has_project_partners = true
      expect(@new_project.get_percentage_for_category(@institutional_cat)).to eq(66)
    end
    # Social
    #
    # Boolean
    it '+1 point when has_community_involvement is true' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'has_community_involvement', label: 'Has community involvement', data_type: 'boolean')
      @new_project.has_community_involvement = true
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(100)
    end
    it '+1 point when has_community_involvement is false' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'has_community_involvement', label: 'Has community involvement', data_type: 'boolean')
      @new_project.has_community_involvement = false
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(100)
    end
    it '+0 points when has_community_involvement is nil' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'has_community_involvement', label: 'Has community involvement', data_type: 'boolean')
      @new_project.has_community_involvement = nil
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(0)
    end 
    it '+1 point when has_gender_component is true' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'has_gender_component', label: 'Has gender component', data_type: 'boolean')
      @new_project.has_gender_component = true
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(100)
    end
    it '+1 point when has_gender_component is false' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'has_gender_component', label: 'Has gender component', data_type: 'boolean')
      @new_project.has_gender_component = false
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(100)
    end
    it '+0 points when has_gender_component is nil' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'has_gender_component', label: 'Has gender component', data_type: 'boolean')
      @new_project.has_gender_component = nil
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(0)
    end 
    it '+1 point when news_articles_associated_with_project is true' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'news_articles_associated_with_project', label: 'Has news articles associated with project', data_type: 'boolean')
      @new_project.news_articles_associated_with_project = true
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(100)
    end
    it '+1 point when news_articles_associated_with_project is false' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'news_articles_associated_with_project', label: 'Has news articles associated with project', data_type: 'boolean')
      @new_project.news_articles_associated_with_project = false
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(100)
    end
    it '+0 points when news_articles_associated_with_project is nil' do
      FactoryBot.create(:filter, category:@social_cat, slug: 'news_articles_associated_with_project', label: 'Has news articles associated with project', data_type: 'boolean')
      @new_project.news_articles_associated_with_project = nil
      expect(@new_project.get_percentage_for_category(@social_cat)).to eq(0)
    end 
  end
end
