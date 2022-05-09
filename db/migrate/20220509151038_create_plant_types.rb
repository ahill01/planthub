class CreatePlantTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :plant_types do |t|
      t.string :type
      t.integer :water_frequency
      t.integer :water_amount
      t.string :sun_needs
      t.string :type_examples
      t.timestamps
    end
  end
end
