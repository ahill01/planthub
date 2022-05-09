class Plant < ApplicationRecord
  belongs_to :plant_category
  belongs_to :user
  has_many :waterings
end
