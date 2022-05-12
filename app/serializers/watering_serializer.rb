class WateringSerializer < ActiveModel::Serializer
  attributes :id, :formatted_time
  
  #custom method to formate date-time
def formatted_time
  return self.object.created_at.to_fs
end
  
  belongs_to :plant
end
