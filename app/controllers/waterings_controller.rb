class WateringsController < ApplicationController
    def create
        watering = Watering.create!(watering_params)

        render json: watering, status: 202
    end

    def destroy
        watering = Watering.find(params[:id])
        watering.destroy
        render status: 201
    end

    private
    def watering_params
        params.require(:watering).permit(:plant_id)
    end
end
