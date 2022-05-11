class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def login!
        session[:user_id] = user.id
    end

    def logged_in?
        !!session[:user_id]
    end

    def current_user
        current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorized_user?
         user == current_user
    end

    def logout!
         session.clear
    end

    private
    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status:422
    end
end
