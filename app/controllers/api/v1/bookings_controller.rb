class Api::V1::BookingsController < ApplicationController

def index
  @bookings = Booking.all
  render json: @bookings
end
# gets booking by client or animal ID
def show
  @booking = Booking.find(params[:id])
  render json: @booking
end

def create
  @booking = Booking.create(booking_params)
  render json: @booking
end




private

def booking_params
  params.permit(:animal_id, :client_id, :date)
end


end
