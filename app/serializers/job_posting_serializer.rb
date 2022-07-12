class JobPostingSerializer < ActiveModel::Serializer
  attributes :id, :position, :location, :compensation, :job_type, :description, :benefits, :company_name
  # has_one :company

  def company_name
    object.company.name
  end
end
