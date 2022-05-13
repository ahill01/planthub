class SessionsController < ApplicationController

    def create
      user = User.find_by( username: session_params[:username])
      if user && user.authenticate(session_params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { 
          errors: ['no such user', 'verify credentials and try again or signup']
        }, status: :not_found
      end
    end

    def destroy
      session.delete :user_id
      head :no_content
    end

    private
      def session_params
        params.require(:user).permit(:username, :password)
      end
  end