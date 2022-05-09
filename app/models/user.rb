class User < ApplicationRecord
    has_many :plants
    has_many :plant_types, through: :plants
end
