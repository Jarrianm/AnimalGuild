class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :experience, :availability, :contact_info
end
