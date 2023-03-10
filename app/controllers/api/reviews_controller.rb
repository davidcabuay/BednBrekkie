class Api::ReviewsController < ApplicationController
    # wrap_parameters include: Review.attribute_names

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:listing_id, :author_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value)
    end
end
