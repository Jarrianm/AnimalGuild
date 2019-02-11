class Client < ApplicationRecord
  has_many :bookings
  has_many :animals, through: :bookings
end
