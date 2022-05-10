class WateringsSerializer < ActiveModel::Serializer
  attributes :id, :created_at
  #custom method to formate date-time
  belongs_to :plant
end
