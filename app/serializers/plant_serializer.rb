class PlantSerializer < ActiveModel::Serializer
  include ActiveSupport::CoreExt::Numeric

  attributes :id, :name, :plant_type, :outside, :picture, :last_watered

  def last_watered
    return self.object.waterings.first.to_fs(:long) 
  end

  belongs_to :plant_category
  has_many :waterings
end
