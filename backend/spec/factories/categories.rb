require 'faker'

FactoryBot.define do
	factory :category do
    slug { [:context].sample }
	end
end