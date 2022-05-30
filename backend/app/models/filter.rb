class Filter < ApplicationRecord
  belongs_to :category
  enum data_type: {
    year: 0,
    number: 1,
    string: 2,
    boolean: 3
  }, _prefix: true
  enum query_mode: {
    exact: 0,
    includes: 1,
    greater_or_equal_than: 2,
    less_or_equal_than: 3,
    range: 4
  }, _prefix: true
end
