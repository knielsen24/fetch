class Company < ApplicationRecord
   has_secure_password

   has_many :reviews
   has_many :users, through: :reviews

   has_many :job_postings
   has_many :applied_tos, through: :job_postings

end
