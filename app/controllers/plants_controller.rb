class PlantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response



    def index
        plants = Plant.all
        render json: plants
    end
  
    def show
        plant = Plant.find(params[:id])
        render json: plant
    end
  
    def update
        plants = Plant.find(params[:id])
        render json: plants 
    end
  
    def destroy
        plants = Plant.find(params[:id])
        plants.destroy
        render status: 200
    end

    def show_waterings
        waterings = Plant.find(params[:id]).waterings

        render json: waterings, status: 200
    end
  
    private
    def render_not_found_response
        render json: {error: "Plant not found"}, status: :not_found
    end
end
