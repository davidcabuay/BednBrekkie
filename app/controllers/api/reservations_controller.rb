class Api::ReservationsController < ApplicationController
    # before_action require_logged_in, only:[:create, :update, :destroy]
    
    def index
        @reservations = Reservation.all
    end
    
    def create
        check_in = params[:check_in]
        check_out = params[:check_out]

        overbooking = Reservation.where("((check_in <= ? AND check_out > ?) OR (check_in >= ? AND check_in < ?))", check_in, check_in, check_in, check_out)

        if overbooking.any?
            render json: {errors: "Your requested dates have already been booked"}, status: unprocessable_entity
        else
            @reservation = Reservation.new(reservation_params)
            if @reservation.save
                render :show
            else
                render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
            end
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

    def reservation_params
        params.require(:reservation).permit(:listing_id, :booker_id, :check_in, :check_out, :num_of_guests)
    end
end
