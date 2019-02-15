class ChangeBookings < ActiveRecord::Migration[5.2]
  def change
    change_column :bookings, :client_id, :Client
  end
end
