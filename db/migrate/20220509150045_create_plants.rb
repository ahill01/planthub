class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :plant_type
      t.references :plant_category, null: false, foreign_key: true
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.boolean :outside
      t.string :picture

      t.timestamps
    end
  end
end
