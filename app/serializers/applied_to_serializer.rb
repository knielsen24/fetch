class AppliedToSerializer < ActiveModel::Serializer
  # attributes :company
  has_one :job_posting
  has_one :user

end
