@cart_items.each do |cart_item|
    json.set! cart_item.product_id do 
        json.extract! cart_item, :id, :quantity, :product_id, :user_id
    end
end