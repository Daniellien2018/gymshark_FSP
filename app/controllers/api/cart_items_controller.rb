class Api::CartItemsController < ApplicationController
    before_action :require_logged_in

    def index 
        user_id = current_user[:id]
        @cart_items = CartItem.where(user_id: user_id)
    end 

    def create 
        @cart_item = CartItem.new(cart_params)
        if @cart_item.save
            render 'api/cart_items/show'
        else
            render json: {errors: ['Unable to add to cart.']}, status: 422;
        end
    end 

    def update 
         @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_params)
            render 'api/cart_items/show'
        else 
            render json: {errors: ['Unable to update cart.']}, status: 422;
        end
    end 

    def destroy
         @cart_item = CartItem.find(params[:id])
        if @cart_item.destroy
            render json: {message: 'Successfully removed from cart.'}
        end 
    end 

    private

    def cart_params 
        params.require(:cart_item).permit(:id,:product_id, :quantity, :user_id)
    end
end
