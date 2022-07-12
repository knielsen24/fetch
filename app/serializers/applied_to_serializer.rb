class AppliedToSerializer < ActiveModel::Serializer
  # attributes :company
  has_one :job_posting


  def company 
    object.job_posting.company
  end
  
end
