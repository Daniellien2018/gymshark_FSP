# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  author_id  :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :body, presence: true
    validates :rating, inclusion: {in: 1..5, message: "Rating must be between 1 and 5"}
    validate :not_a_duplicate

    belongs_to :product
    belongs_to :author,
        class_name: :User

    private

    def not_a_duplicate
        if Review.exists?(author_id: author_id, product_id: product_id)
            errors.add(:base, message: "You have already left a Review for this Product")
        end
    end
end
