class Api::V1::AnimalsController < ApplicationController

def index
  @animals = Animal.all
  render json: @animals
end

def show
  @animal = Animal.find(params[:id])
  render json: @animal
end


private

def animal_params
  params.permit(:name, :experince, :availablity, :contact_info)
end


end
