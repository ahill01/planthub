class Plant < ApplicationRecord
  belongs_to :plant_category
  belongs_to :user
  has_many :waterings

  validates :name, presence: true
  validates :planted_date, presence: true
  validates :plant_category, presence: true
end
