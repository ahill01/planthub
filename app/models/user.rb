class User < ApplicationRecord
    has_many :plants
    has_many :plant_categories, through: :plants
end
