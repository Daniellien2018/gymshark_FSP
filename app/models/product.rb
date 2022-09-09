# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :float            not null
#  description :text
#  category    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    validates :price, presence: true
    
    has_many :reviews,
        dependent: :destroy
    has_one_attached :photo

end
