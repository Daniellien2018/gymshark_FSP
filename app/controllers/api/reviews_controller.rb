class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + [:productId]
    before_action :require_logged_in

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render :show
    end

    def destroy
        @review = current_user.reviews.find(params[:id])
        unless @review
            render json: {message: 'Unauthorized' }, status: :unauthorized
            return
        end
        @review.destroy
        render :show 
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: { errors: ["Please fill in all fields"]}, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:id, :body, :rating, :product_id, :author_id)
    end
end