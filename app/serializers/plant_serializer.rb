class PlantSerializer < ActiveModel::Serializer

  attributes :id, :name, :plant_type, :outside, :picture, :last_watered

  def last_watered
    return self.object.waterings.first
  end

  belongs_to :plant_category
  has_many :waterings
end
