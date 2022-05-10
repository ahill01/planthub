class PlantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response



    def index
        plants = Plant.all
        render json: plants
    end
  
    def show
        plants = Plants.find(params[:id])
        render json: plants
    end
  
    def update
        plants = Plants.find(params[:id])
        render json: plants 
    end
  
    def destroy
        plants = Plants.find(params[:id])
        plants.destroy
        render status: 200
    end
  
    private
    def render_not_found_response
        render json: {error: "Plant not found"}, status: :not_found
    end
end
