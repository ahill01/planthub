class WateringsController < ApplicationController
    def create
        watering = Watering.create!(watering_params)

        render json: watering, status: 202
    end

    private
    def watering_params
        params.permit(:plant_id)
    end
end
