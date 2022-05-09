class CreatePlantCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :plant_categories do |t|
      t.string :category
      t.integer :water_frequency
      t.integer :water_amount
      t.string :sun_needs

      t.timestamps
    end
  end
end
