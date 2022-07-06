require 'faker'

FactoryBot.define do
	factory :project do
		start_year { }
		end_year { }
		size_of_project_ha { }
		has_explicit_location { }
		fire_prevention { }
		addresses_known_threats { }
		discloses_species_used { }
		identify_deforestation_driver { }
		local_seedling_nurseries { }
		follow_up_disclosed { }
		scientific_research_associated_with_project { }
		has_gender_component { }
		project_number { Faker::Number.number(digits: 3) }
    project_name { }
    lead_organization { }
		forest_type { [] }
		financial_model { [] }
		organization_type { }
		highlighted { false }
		approved { true }
	end
end