class Api::V1::ClientsController < ApplicationController

  def index
    @clients = Client.all
    render json: @clients
  end

  def show
    @client = Client.find(params[:id])
    render json: @client
  end


  private

  def client_params
    params.permit(:name)
  end


  end
