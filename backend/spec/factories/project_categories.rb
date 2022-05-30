require 'faker'

FactoryBot.define do
	factory :project_category do
		project
		category
		percentage { Faker::Number.number(digits: 2) }
	end
end