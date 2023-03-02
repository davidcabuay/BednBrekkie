class Api::ReservationsController < ApplicationController
    before_action :set_reservation, only:[:show, :update, :destroy]
    def index
        @reservations = Reservation.all

    end
    
    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def show
        render :show
    end

    def update
        if @reservation.update(listing_params)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @reservation.destroy
    end
    
    private

    def set_reservation
        @reservation = Reservation.find(params[:id])
    rescue
        render json: ['Post not found'], status: :not_found
    end

    def listing_params
        params.require(:reservation).permit(:listing_id, :booker_id, :check_in, :check_out, :num_of_guests)
    end
end
