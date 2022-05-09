class PlantTypeSerializer < ActiveModel::Serializer
  attributes :id, :type, :water_frequency, :water_amount, :sun_needs

end
