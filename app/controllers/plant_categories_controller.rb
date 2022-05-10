class PlantCategoriesController < ApplicationController

    def index
        plant_cat = PlantCategory.all
        render json: plant_cat
    end
  
    def show
        plant_cat = PlantCategory.find(params[:id])
        render json: plant_cat
    end
  
  
    private
end
