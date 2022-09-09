class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + [:productId]
    before_action :require_logged_in

    def create
        @review = current_user.reviews.(review_params)
        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
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

    # def edit
    # end

    private

    def review_params
        require(:review).permit(:review, :rating, :product_id, :author_id)
    end
end