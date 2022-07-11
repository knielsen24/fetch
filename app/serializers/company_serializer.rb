class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :num_of_employees, :phone, :address, :image, :password, :email
end
