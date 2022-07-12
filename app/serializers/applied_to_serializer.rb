class AppliedToSerializer < ActiveModel::Serializer
  # attributes :company
  has_one :job_posting

end
