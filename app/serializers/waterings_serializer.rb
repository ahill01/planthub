class WateringsSerializer < ActiveModel::Serializer
# includes ActiveSupport::CoreExt::date
  attributes :id, :created_at
  
  #custom method to formate date-time
  belongs_to :plant
end
