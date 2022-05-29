require 'faker'

FactoryBot.define do
	factory :project do
		project_number { Faker::Number.number(digits: 3) }
    project_name { Faker::Company.name }
    lead_organization { Faker::Company.industry }
	end
end