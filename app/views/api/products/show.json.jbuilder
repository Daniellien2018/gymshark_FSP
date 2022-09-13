json.product do 
    json.partial! '/api/products/product', product: @product
end


 @product.reviews.each do |review|

    json.reviews do
        json.set! review.id do
            json.extract! review, :id, :review, :rating, :product_id, :author_id, :created_at, :updated_at
        end
    end

    json.users do
        json.set! review.author_id do
            json.extract! review.author, :id, :email, :username
        end
    end
end