class AppliedToWithIdSerializer < ActiveModel::Serializer
   attributes :id
   # has_one :user

   private 

   def application_id

end
