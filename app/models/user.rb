class User < ApplicationRecord

    has_secure_password

    has_many :reviews
    has_many :companies, through: :reviews
    has_many :applied_to
    has_many :job_postings, through: :applied_to
end
