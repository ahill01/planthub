class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :species
      t.references :plant_type, null: false, foreign_key: true
      t.string :name
      t.datetime :planted_date
      t.references :user, null: false, foreign_key: true
      t.boolean :outside
      t.string :picture

      t.timestamps
    end
  end
end
