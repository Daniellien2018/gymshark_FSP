class Api::ProductsController < ApplicationController
    wrap_parameters include: Product.attribute_names + [:photo], format: :multipart_form

    def index
        @products = Product.all
    end

    def show
        @product = Product.find(params[:id])
    end

    private

    def post_params
        params.require(:product).permit(
            :name,
            :price,
            :category
        )
    end
end