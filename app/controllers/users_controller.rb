class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response(exception)

    def create
        user = User.create!(user_param)
        login!
        render json: user, status: :created 
    end
        
    def index
        users = User.all
        render json: users
    end
  
    def show
        users = User.find(params[:id])
        render json: users 
    end
  
    def update
        users = User.find(params[:id])
        render json: users
    end
  
    def destroy
        users = User.find(params[:id])
        users.destroy
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
