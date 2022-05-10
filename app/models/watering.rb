class Watering < ApplicationRecord
  belongs_to :plant, dependent: :destroy
end
