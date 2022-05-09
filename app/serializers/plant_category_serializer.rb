class PlantCategorySerializer < ActiveModel::Serializer
  attributes :id, :category, :water_frequency, :water_amount, :sun_needs
end
