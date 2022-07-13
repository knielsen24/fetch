class UsersController < ApplicationController
   skip_before_action :authorize, only: [:create, :index, :destroy]

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
   #   @current_user.delete
      head :no_content
   end

   def update
      @current_user.update!(user_params)
      render json: @current_user, status: :accepted
   end

   private

   def user_params
      params.permit(:id, :first_name, :last_name, :email, :image_url, :password, :password_confirmation)
   end

end
