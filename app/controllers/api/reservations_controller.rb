class Api::ReservationsController < ApplicationController
    # before_action set_reservation
    # wrap_paramaters include: Reservation.attribute_names + 

    def index
        @reservations = Reservation.all
    end
    
    def create
        check_in = params[:check_in]
        check_out = params[:check_out]

        overbooking = Reservation
        .where(listing_id: params[:listing_id])
        .where("((check_in <= ? AND check_out > ?) OR (check_in >= ? AND check_in < ?))" , check_in, check_in, check_in, check_out)

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
        # debugger
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
    end
    


private

    def reservation_params
        params.require(:reservation).permit(:id, :listing_id, :booker_id, :check_in, :check_out, :num_of_guests)
    end
end
