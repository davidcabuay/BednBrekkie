class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render :index
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @listing = Listing.find_by(params[:id])
    render :show
  end

  private
  def listing_params
    params.require(:listing).permit(:host_id, :price, :title, :description, :address, :city, :num_of_guests, :num_of_bedrooms, :num_of_beds, :num_of_baths)
  end
end
