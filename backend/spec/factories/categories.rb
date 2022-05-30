require 'faker'

FactoryBot.define do
	factory :category do
    slug { [:context_category].sample }
	end
end