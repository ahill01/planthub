class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :outside, :picture

  belongs_to :user
  belongs_to :plant_type
  has_many :waterings
end
