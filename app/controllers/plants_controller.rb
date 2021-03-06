class PlantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created
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
        plant = Plant.find_by(id:params[:id])
        if plant then
            plant.update(plant_params)
            render json: plant, status: :ok
        end
    end
  
    def destroy
        plant = Plant.find(params[:id])
        plant.waterings.clear
        plant.destroy
        render json: plant, status: 200
    end

    def show_waterings
        waterings = Plant.find(params[:id]).waterings

        render json: waterings, status: 200
    end
  
    private
    def plant_params
        params.require(:plant).permit(:name, :plant_type, :plant_category_id, :user_id, :outside, :picture)
    end

    def render_not_found_response
        render json: {error: "Plant not found"}, status: :not_found
    end
end
