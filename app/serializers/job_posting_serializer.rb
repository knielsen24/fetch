class JobPostingSerializer < ActiveModel::Serializer
  attributes :id, :position, :location, :compensation, :job_type, :description, :benefits
  has_one :company
end
