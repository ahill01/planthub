class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response(exception)

    def create
        user = User.create!(user_param)
        render json: user, status: :created 
    end
        
    def index
        user = User.all
        render json: user
    end
  
    def show
        user = User.find(params[:id])
        render json: user 
    end
  
    def update
        user = User.find(params[:id])
        render json: user
    end
  
    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user, status: 200
    end
  
    private
    def user_param
        params.permit(:username, :password, :password_confirmation, :fname, :lname)
    end

    def render_unprocessable_entity_response
        render json: {errors: exception.record.errors.full_messages}, status:422
    end
end
