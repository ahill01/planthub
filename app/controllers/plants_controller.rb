class PlantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        plant = Plants.create!(plant_params)
        render json: plant.Plant, status: :created
    end

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
        plant = Plant.find(params[:id])
        plant.destroy
        render json: plant, status: 200
    end

    def show_waterings
        waterings = Plant.find(params[:id]).waterings

        render json: waterings, status: 200
    end
  
    private
    def plant_params
        params.permit(:name, :plant_type, :plant_category_id, :user_id, :outside, :picture)
    end

    def render_not_found_response
        render json: {error: "Plant not found"}, status: :not_found
    end
end
