class PlantSerializer < ActiveModel::Serializer
attributes :id, :name, :plant_type, :outside, :picture, :last_watered, :next_watering, :thirsty

  def last_watered
    if(self.object.waterings.last!= nil) then
    last_watered_date = self.object.waterings.last.created_at
    return last_watered_date.to_fs
    end
    # else return nil
  end

  def next_watering
    if(self.object.waterings.first !=nil) then
      next_water_date = self.object.waterings.last.created_at.advance(days: object.plant_category.water_frequency)
      return next_water_date.to_fs
    end
  #  else return nil
  end 

  def thirsty
    if(self.object.waterings.first!= nil) then
   #if current date >= next_watering_date 
    current_date = Time.now()
    next_water_date = self.object.waterings.last.created_at.advance(days: object.plant_category.water_frequency)
    return (current_date >= next_water_date)
    else return true
    end
  end

  belongs_to :plant_category
  has_many :waterings
end