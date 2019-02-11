class BookingSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :animal_id
end
