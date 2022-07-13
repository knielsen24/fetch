class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :num_of_employees, :phone, :address, :image, :password, :email

  has_many :job_postings

end
