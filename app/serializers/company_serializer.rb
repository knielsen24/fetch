class CompanySerializer < ActiveModel::Serializer
      attributes :id, :name, :num_of_employees, :phone, :address, :image, :email
      
      has_many :job_postings

      attribute :first_review, unless: -> {first_review.blank?}
      attribute :first_reviewer, unless: -> {first_review.blank?}
      # attribute :stars, unless: -> {first_review.blank?}
   
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

#    def reviewer_check?
#       true if first_review.user
#       first_review.user
#    end

#    def stars
#      stars = object.reviews.average(:stars)
#      stars.to_i
#    end

#    def stars_check?
#       true if object.reviews.average(:stars)
#    end




end
