require 'faker'

FactoryBot.define do
	factory :project do
		start_year { 1980 }
		end_year { 2022 }
		project_number { Faker::Number.number(digits: 3) }
    project_name { Faker::Company.name }
    lead_organization { Faker::Company.industry }
	end
end