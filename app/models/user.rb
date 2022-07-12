class User < ApplicationRecord

    has_secure_password

    has_many :reviews
    has_many :companies, through: :reviews
    has_many :applied_to
    has_many :job_postings, through: :applied_to

	#  validates :email, :first_name, :last_name, presence: true
	#  validates :email, uniqueness: true
end
