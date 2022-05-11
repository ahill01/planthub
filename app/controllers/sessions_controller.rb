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
      def is_logged_in?
          if logged_in? && current_user
            render json: {
              logged_in: true,
              user: current_user
            }
          else
            render json: {
              logged_in: false,
              message: 'no such user'
            }
          end
        end

        def destroy
          logout!
          render json: {
            status: 200,
            logged_out: true
          }
        end

    private
      def session_params
        params.permit(:username, :password)
    end
  end