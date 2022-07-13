class JobPostingSerializer < ActiveModel::Serializer
  attributes :id, :position, :location, :compensation, :job_type, :description, :benefits, :company_name, :company_id
  # has_one :company

  def company_name
    object.company.name
  end
end
