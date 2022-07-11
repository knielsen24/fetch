class AppliedToSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :job_posting
end
