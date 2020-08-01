module Api
  module V1
    class ProductsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        products = Product.all

        render json: ProductSerializer.new(products, options).serialized_json
      end

      def show
        product = Product.find_by(slug: params[:slug])

        render json: ProductSerializer.new(product, options).serialized_json
      end

      def create
        product = Product.new(product_params)

        if product.save
          render json: ProductSerializer.new(product).serialized_json
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end

      def update
        product = Product.find_by(slug: params[:slug])

        if product.update(product_params)
          render json: ProductSerializer.new(product, options).serialized_json
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end

      def destroy
        product = Product.find_by(slug: params[:slug])

        if product.destroy
          head :no_content
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end

      private

      def product_params
        params.require(:product).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end
