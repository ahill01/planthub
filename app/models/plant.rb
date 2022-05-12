class Plant < ApplicationRecord
  belongs_to :plant_category
  belongs_to :user
  has_many :waterings, dependent: :destroy

  validates :name, presence: true
  validates :planted_date, presence: true
  validates :plant_category, presence: true
end
