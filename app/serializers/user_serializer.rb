class UserSerializer < ActiveModel::Serializer
  attributes :id, :fname, :lname, :username

  has_many :plants
end
