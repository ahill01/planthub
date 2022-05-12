class PlantSerializer < ActiveModel::Serializer

  attributes :id, :name, :plant_type, :outside, :picture

  # def last_watered
  #   return self.object.waterings.first.created_at
  # end

  # def next_watering
  #     # last_watered.advance(days: object.plant_category.water_ti)
  # end 
  belongs_to :plant_category
  has_many :waterings
end
