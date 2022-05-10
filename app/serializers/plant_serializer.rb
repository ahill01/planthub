class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :plant_type, :outside, :picture

  belongs_to :plant_category
  has_many :waterings
end
