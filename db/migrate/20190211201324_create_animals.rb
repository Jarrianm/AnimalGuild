class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :experience
      t.string :availability
      t.string :contact_info
      t.string :species
      t.string :image
      t.timestamps
    end
  end
end
