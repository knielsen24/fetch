class User < ApplicationRecord

    has_secure_password

    has_many :reviews
    has_many :companies, through: :reviews
    has_many :applied_to
    has_many :job_postings, through: :applied_to

	validates :email, :first_name, :last_name, presence: true
	validates :email, uniqueness: true
    validates :password, length: { in: 4..12 }
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number

  def password_uppercase
    return if !!password.match(/\p{Upper}/)
    errors.add :password, ' must contain at least 1 uppercase '
  end

  def password_special_char
    special = "?<>',?[]}{=-)(*&^%$#`~{}!"
    regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
    return if password =~ regex
    errors.add :password, ' must contain special character'
  end

  def password_contains_number
    return if password.count("0-9") > 0
    errors.add :password, ' must contain at least one number'
  end
end
