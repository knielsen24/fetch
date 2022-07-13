class ReviewSerializer < ActiveModel::Serializer
   attributes :id, :stars, :review_text
   has_one :company
   has_one :user
end
