require 'faker'

FactoryBot.define do
	factory :filter do
		category
    slug { 'start_year' }
	end
end