class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        application = AppliedTo.where(user_id: params[:id])
        render json: application
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

	 def destroy
		  user = User.find(params[:id])
		  user.destroy
		  head :no_content
	 end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end
