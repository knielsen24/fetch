class CompanySerializer < ActiveModel::Serializer
   attributes :id, :name, :num_of_employees, :phone, :address, :image, :email, :first_review, :first_reviewer, :stars

   has_many :job_postings
   has_many :reviews
   # has_many :users

   def first_review
         object.reviews.first 
   end

   def first_reviewer
         first_review.user
   end

   def stars
     stars = object.reviews.average(:stars)
     stars.to_i
   end


   # def stars
   #    stars = object.reviews.average(:stars)
   #    stars.to_i
   # end

end
