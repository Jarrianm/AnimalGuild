class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :client_id
      t.integer :animal_id
      t.datetime :date
      t.timestamps
    end
  end
end
